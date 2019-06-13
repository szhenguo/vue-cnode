<template>
  <div class="home-detail">
    <a-card :loading="loading" :title="homeDetailData.title" >
      <div v-html="homeDetailData.content"></div>
    </a-card>
  </div>
</template>

<script>
import axios from 'axios';
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
    this.fetchDetailData();
  },
  methods: {
    async fetchDetailData() {
      try {
        const response = await axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`);
        this.loading = false;
        this.homeDetailData = response.data.data;
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
