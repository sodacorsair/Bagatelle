import React, { Component } from 'react';
import Layout from '@/components/web/layout';
import CatalogueLayout from '@/components/web/catalogueLayout';

import Home from './home';
import Article from './article';
import Archives from './archives';
import TagList from './taglist';
import PageNotFound from '@/components/NotFound';

export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'article/:id', component: Article },
        {
            path: '/',
            component: CatalogueLayout,
            childRoutes: [
                { path: 'archives', component: Archives },
                { path: 'tags', component: TagList },
            ]
        },
        { path: '*', component: PageNotFound },
    ]
}