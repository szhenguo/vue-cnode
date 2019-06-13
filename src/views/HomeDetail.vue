<template>
  <div class="home-detail">
    <a-card :loading="loading" :title="homeDetailData.title" >
      <div v-html="homeDetailData.content"></div>
    </a-card>
  </div>
</template>

<script>
import { getIndexListDstail } from '../api/api';
export default {
  data() {
    return {
      homeDetailData: '',
      loading: true,
    };
  },
  created() {
    this.fetchDetailData();
  },
  methods: {
    async fetchDetailData() {
      try {
        const { data } = (await getIndexListDstail(this.$route.params.id)).data;
        console.log('res', data);
        this.loading = false;
        this.homeDetailData = data;
      } catch (error) {
        console.error(error);
      }
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
