<template>
  <div class="home-list-con">
    <div>
      <!-- 设置列表 -->
      <a-list :loading="loading" :dataSource="homeListData" class="home-list" >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-list-item-meta
            :description="`${item.author.loginname}发表于:${item.create_at.split('T')[0]}`"
          >
            <router-link slot="title" :to="`/homedetail/${item.id}`">
              <a-tag color="#80bd01">{{item.tab | isTab}}</a-tag>
              {{item.title}}
            </router-link>
            <a-avatar slot="avatar" :src="item.author.avatar_url"/>
          </a-list-item-meta>
          <ul class="ant-list-item-action">
            <Li>回复:{{item.reply_count}}</Li>
            <Li>访问:{{item.visit_count}}</Li>
          </ul>
        </a-list-item>
      </a-list>
      <!-- <a-spin size="large" class="loading" :spinning="loading"/> -->
    </div>
    <div>
      <!-- 设置分页 -->
      <a-pagination
        class="home-pagination"
        showQuickJumper
        :defaultCurrent="1"
        :total="500"
        @change="onChange"
      />
    </div>
  </div>
</template>
<script>
import { getorglist } from '../../../api/api';
export default {
  data() {
    return {
      limit: 10,
      page: 1,
      homeListData: [],
      loading: true,
    };
  },
  filters: {
    isTab: (value) => {
      console.log('value', value);
      if (value === 'ask') {
        return (value = '问题');
      }
      if (value === 'share') {
        return (value = '分享');
      }
      if (value === 'job') {
        return (value = '招聘');
      }
      if (value === 'dev') {
        return (value = '测试');
      }
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(`https://cnodejs.org/api/v1/topics?tab=${this.$route.params.id}&page=${this.page}&limit=${this.limit}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.data, '数据');
          this.loading = false;
          this.homeListData = result.data;
        })
        .catch((err) => {
          console.log('parsing failed', err);
        });
    },
    onChange(pageNumber) {
      this.page = pageNumber;
      this.fetchData();
    },
  },
};
</script>
<style lang="scss" scoped>
.home-list-con {
  position: relative;
  margin-top: 20px;
  .loading {
    position: absolute;
    left: calc(50% - 16px);
    top: 100px;
  }
  .home-pagination {
    padding: 20px 0;
    text-align: center;
  }
  .home-list {
    .ant-list-item {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>
<style lang="scss">
.home-list-con .home-list .ant-spin-nested-loading{
  min-height: 500px;
}
</style>

