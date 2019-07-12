import { lazy } from 'react';
import Layout from '@/components/admin/Layout';
import Login from './login';
import Register from './register';
import Write from './write';
import PageNotFound from '@/components/NotFound';

import Home from './home';

export default {
    path: 'admin',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'write', component: Write },
        { path: '*', component: PageNotFound },
    ]
}