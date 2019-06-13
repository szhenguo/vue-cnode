<template>
  <div id="app">
    <main-header></main-header>
    <main class="pageWrap">
      <router-view/>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
@Component({
  components: {
    MainHeader,
    MainFooter,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  display: -ms-flexbox;
  display: flex;
  min-height: 100vh;
  -ms-flex-direction: column;
  flex-direction: column;
  .pageWrap {
    flex: 1;
  }
}
img {
  width: 100%;
}
</style>

