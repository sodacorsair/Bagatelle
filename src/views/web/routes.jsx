import React, { Component } from 'react';
import Layout from '@/components/web/layout';
import CatalogueLayout from '@/components/web/catalogueLayout';

import Home from './home';
import Articles from './articles';
import Archives from './archives';
import PageNotFound from '@/components/NotFound';

export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'articles', component: Articles },
        {
            path: '', 
            component: CatalogueLayout,
            childRoutes: [
                { path: 'archives', component: Archives }
            ]
        },
        { path: '*', component: PageNotFound },
    ]
}