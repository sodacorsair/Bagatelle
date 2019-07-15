import { lazy } from 'react';
import Layout from '@/components/admin/Layout';
import Write from './write';
import PageNotFound from '@/components/NotFound';

import Home from './home';

export default {
    path: 'admin',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'write', component: Write },
        { path: '*', component: PageNotFound },
    ]
}