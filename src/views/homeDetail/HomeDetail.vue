<template>
  <div class="home-detail">
    <a-card :loading="loading" :title="homeDetailData.title" >
      <div v-html="homeDetailData.content"></div>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'Vue!',
    },
  },
  data() {
    return {
      homeDetailData: '',
      loading: true,
    };
  },
  created() {
    const newsId = this.$route.params.id;
    console.log(newsId, '$route.params.id');
    this.fetchDetailData();
  },
  methods: {
    fetchDetailData() {
      fetch(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then((response) => {
          return response.json();
        }).then((result) => {
          console.log(result, '数据');
          this.loading = false;
          this.homeDetailData = result.data;
        }).catch((err) => {
          console.log('parsing failed', err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-detail {
  max-width: 980px;
  margin: 0 auto;
}
</style>
