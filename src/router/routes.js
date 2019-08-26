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
    path: '/about',
    name: 'about',
    component: async () =>
      lazyLoad(import(/* webpackChunkName: "about" */ '../views/About')),
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
