import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress/nprogress';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueMeta, { keyName: 'page' });

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/vuelendar-lp/' : '/',
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (routeFrom.name !== null) {
    NProgress.start();
  }

  return next();
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              if (routeFrom.name === args[0].name) {
                NProgress.done();
              }

              next(...args);
              reject(new Error('Redirected'));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
  } catch (error) {
    return;
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
