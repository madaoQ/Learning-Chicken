import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Path from '../views/Path.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/path',
    component: Path,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   // 如果目标路由需要认证且用户未登录，则重定向到登录页面
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // 假设你有某种方式检查用户是否已登录
//     const isAuthenticated = /* 检查用户是否已登录 */;
//     if (!isAuthenticated) {
//       next({ name: 'Login' });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router
