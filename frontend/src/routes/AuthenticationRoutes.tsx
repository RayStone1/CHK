import {lazy} from 'react';

// project imports
import Loadable from '../components/Loadable';
import MinimalLayout from '../layouts/MinimalLayout';

const Login = Loadable(lazy(() => import('../views/Login')));

const AuthenticationRoutes = {
	path: '/',
	element: <MinimalLayout />,
	children: [
		{
			path: '/login',
			element: <Login />,
		},
	],
};

export default AuthenticationRoutes;
