<template>
  <a-menu
    :mode="mode"
    v-model="now"
    class="home-menu"
  >
    <a-menu-item
      v-for="(item,index) in tab"
      :key="item.tab"
    >
      <router-link :to="`/home/${item.tab}`">{{item.txt}}</router-link>
    </a-menu-item>

  </a-menu>
</template>
<script>
import tab from '../../mock/tab';
export default {
  props: {
    mode: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      now: [],
      tab: [
        {
          tab: 'all',
          txt: '全部',
          isIndex: true,
        },
        {
          tab: 'good',
          txt: '精华',
          isIndex: true,
          color: 'geekblue',
        },
        {
          tab: 'ask',
          txt: '问题',
          isIndex: true,
        },
        {
          tab: 'share',
          txt: '分享',
          isIndex: true,
          color: 'purple',
        },
        {
          tab: 'job',
          txt: '招聘',
          isIndex: true,
          color: 'cyan',
        },
        {
          tab: 'dev',
          txt: '测试',
          isIndex: true,
          color: 'lime',
        },
      ],
    };
  },
  created() {
    this.getNow();
  },
  methods: {
    getNow() {
      const now = location.pathname.split('/');
      console.log('wwww', now);
      this.now.push(now[2]);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-menu {
  border-right: none;
  li {
    text-align: center;
  }
}
#indexXsMenu {
  display: flex;
  li {
    flex: 1;
    text-align: center;
  }
}
</style>
