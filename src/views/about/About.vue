<template>
  <div class="about-page">
    <a-card
      v-for="(item, index) in aboutData"
      :key="index"
      :title="item.title"
    >
      <div class="about-page-con" v-html="item.content"></div>
    </a-card>
  </div>
</template>
<script>
import data from '../../mock/about.js';
export default {
  data() {
    return {
      aboutData: data,
    };
  },
};
</script>
<!-- 全局修改样式 -->
<style lang="scss">
.about-page {
  max-width: 980px;
  margin: 0 auto;
  .about-page-con {
    a {
      display: inline-block;
      padding: 10px;
    }
  }
  img {
    width: 250px;
    height: 60px;
  }
}
</style>
