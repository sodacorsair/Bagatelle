import React, { Component } from 'react';
import Layout from '@/components/web/layout';
import CatalogueLayout from '@/components/web/catalogueLayout';

import Home from './home';
import Article from './article';
import Archives from './archives';
import ArticleList from './articles';
import TagList from './taglist';
import CateList from './catelist';
import About from './about';
import PageNotFound from '@/components/NotFound';

export default {
    path: '/',
    name: 'home',
    component: Layout,
    childRoutes: [
        { path: '', component: Home },
        { path: 'article/:id', component: Article },
        { path: 'about', component: About },
        {
            path: '/',
            component: CatalogueLayout,
            childRoutes: [
                { path: 'categories', component: CateList },
                { path: 'archives', component: Archives },
                { path: 'tags', component: TagList },
                { path: 'tag/:name', component: ArticleList },
                { path: 'category/:name', component: ArticleList },
            ]
        },
        { path: '*', component: PageNotFound },
    ]
}