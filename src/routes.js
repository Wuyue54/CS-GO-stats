import Home from 'Components/Home';
import Stats from 'Containers/Stats';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/user/:userId', component: Stats }
];

export default routes;
