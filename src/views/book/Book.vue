<template>
  <div class="book">
    <a-card
      v-for="(item, index) in bookData"
      :title="item.title"
      :key="index"
    >
      <div v-html="item.content"></div>
    </a-card>
  </div>
</template>
<script>
import data from '../../mock/getStarted.js';
export default {
  data() {
    return {
      bookData: data,
    };
  },
};
</script>
<style lang="scss" scoped>
.book {
  max-width: 980px;
  margin: 0 auto;
}
</style>
