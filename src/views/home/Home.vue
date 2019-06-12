<template>
  <div class="home-container">
    <a-row class="wrap">
      <a-col :md="6" :xs="0" class="indexSider">
        <home-menu mode="vertical"></home-menu>
      </a-col>
      <a-col :md="0" :xs="24" >
        <home-menu mode="horizontal" id="indexXsMenu"></home-menu>
      </a-col>
      <a-col :md="18" :xs="24" class="homeList">
        <home-list>
          <router-view></router-view>
        </home-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeMenu from './components/homeMenu.vue';
import homeList from './components/homeList.vue';
export default {
  data() {
    return {
      num: 10,
    };
  },
  components: {
    HomeMenu,
    homeList,
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  .wrap {
    position: relative;
    max-width: 980px;
    margin: 0 auto !important;
    border: 1px solid #ccc;
    .nav {
      height: 64px;
      line-height: 64px;
      .ant-menu {
        line-height: 62px;
      }
    }
    .indexSider {
      border-right: 1px solid #ccc;
      padding-bottom: 9999px;
      margin-bottom: -9999px;
    }
  }
}
</style>

