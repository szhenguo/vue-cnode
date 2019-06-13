<template>
  <div class="homeHeader">
    <a-layout>
      <a-layout-header>
        <a-row class="wrap">
          <a-col :md="6" :xs="24">
            <router-link to="/" tag="div" class="logo">
              <img class="logo-img" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
            </router-link>
          </a-col>
          <a-col :md="18" :xs="0" class="nav">
            <a-menu v-model="current" mode="horizontal" >
              <a-menu-item key="home">
                <router-link to="/"><a-icon type="home" />首页</router-link>
              </a-menu-item>
              <a-menu-item key="book">
                <router-link to="/book"><a-icon type="book" />新手入门</router-link>
              </a-menu-item>
              <a-menu-item key="about">
                <router-link to="/about"><a-icon type="info-circle-o"/>关于</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col :md="0" :xs="24" class="xsNav">
            <a-dropdown :trigger="['click']" placement="bottomRight">
              <a-button><a-icon type="bars" /></a-button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/">
                    <a-icon type="book" />
                    <span class="text">首页</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/book">
                    <a-icon type="book" />
                    <span class="text">新手入门</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/about">
                    <a-icon type="info-circle-o"/>
                    <span class="text">关于</span>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: [''],
    };
  },
  created() {
    this.HeaderNow();
  },
  methods: {
    HeaderNow() {
      const HeaderNow = location.pathname.split('/');
      console.log('HeaderNow', HeaderNow[1]);
      this.current.push(HeaderNow[1]);
    },
  },
};
</script>
<style lang="scss" scoped>
.homeHeader {
  .wrap {
    position: relative;
    max-width: 980px;
    margin: 0 auto;
    .logo {
      display: flex;
      height: 64px;
      line-height: 64px;
      color: #fff;
      margin-bottom: 0;
      text-align: center;
      font-size: 34px;
      cursor: pointer;
      .logo-img {
        width: 150px;
        height: auto;
        vertical-align: inherit;
        margin: auto;
      }
    }
    .nav {
      padding-left: 30px;
      .ant-menu-horizontal {
        line-height: 62px;
        float: left;
        background: transparent;
        border: none;
        a {
          color: #fff;
        }
      }
    }
    .xsNav {
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
    }
  }
}
</style>

