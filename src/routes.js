import Global from './components/global';
import Signup from './components/signup';
import Ftp from './components/ftp';
import Game from './components/ppc';
import Login from './components/login';

const routes = {
	component: Global,
	childRoutes: [
    {
			path:'/ftp',
			component: Ftp
		},
		{
			path:'/ppc',
			component: Game
		},
		{
			path:'/login',
			component: Login
		},
		{
			path:'/signup',
			component: Signup
		}
	]
};

export default routes;
