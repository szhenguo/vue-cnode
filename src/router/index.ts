import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // 首页
      name: 'home',
      redirect: '/home/all',
      component: () => import('../views/home/Home.vue'),
      children: [
        {
          path: '/home/:id',
          name: 'homePath',
          component: () => import('../views/home/Home.vue'),
        },
      ],
    },
    {
      path: '/book', // 新手入门
      name: 'book',
      component: () => import('../views/book/Book.vue'),
    },
    {
      path: '/about', // 关于
      name: 'about',
      component: () => import('../views/about/About.vue'),
    },
    {
      path: '/homedetail/:id', // 首页详情
      name: 'homedetail',
      component: () => import('../views/homeDetail/HomeDetail.vue'),
    },
    {
      path: '/test',  // 测试
      name: 'test',
      component: () => import('../components/HelloWorld.vue'),
    },
  ],
});
