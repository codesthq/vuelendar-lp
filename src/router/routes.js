import Home from '@views/Home';
import Demo from '@views/Demo';
import About from '@views/About';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/features',
    name: 'features',
    component: About,
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  },
  {
    path: '/docs',
    name: 'docs',
    component: About,
  },
  {
    path: '/team',
    name: 'team',
    component: About,
  },
  {
    path: '*',
    redirect: 'home',
  },
];
