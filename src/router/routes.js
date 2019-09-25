import Home from '@views/Home';
import Demo from '@views/Demo';
import Docs from '@views/Docs';
import About from '@views/About';
import Team from '@views/Team';

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
