import Home from '@views/Home';
import Demo from '@views/Demo';
import Docs from '@views/Docs';
import Team from '@views/Team';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '*',
    redirect: 'home',
  },
];
