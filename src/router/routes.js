import Home from '@views/Home';

const lazyLoad = async (importView) => {
  const view = await importView;
  return view.default;
};

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/features',
    name: 'features',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "about" */ '../views/About')),
  },
  {
    path: '/demo',
    name: 'demo',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "demo" */ '../views/About')),
  },
  {
    path: '/docs',
    name: 'docs',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "docs" */ '../views/About')),
  },
  {
    path: '/team',
    name: 'team',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "team" */ '../views/About')),
  },
  {
    path: '/404',
    name: '404',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "404" */ '../views/NotFound')),
  },
  {
    path: '*',
    redirect: '404',
  },
];
