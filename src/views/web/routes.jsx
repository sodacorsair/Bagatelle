import React, { Component } from 'react';
import Layout from '@/components/web/layout';
import CatalogueLayout from '@/components/web/catalogueLayout';
import PageNotFound from '@/components/NotFound';

import Home from './home';
import Article from './article';
import TagList from './taglist';
import Archives from './archives';
import About from './about';

export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'article/:id', component: Article },
        { path: 'about', component: About },
        {
            path: '',
            component: CatalogueLayout,
            childRoutes: [
                { path: 'tags', component: TagList },
                { path: 'archives', component: Archives },
                { path: '*', component: PageNotFound },
            ]
        },
        { path: '*', component: PageNotFound },
    ]
}