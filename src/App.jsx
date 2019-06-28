import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '@/components/Loading'
import routes from '@/routes/config';
import { connect } from 'react-redux';

const Root = (props) => {
    const renderRoutes = (routes, contextPath) => {
        const children = []

        const renderRoute = (item, routeContextPath) => {

            if (item.protected && !props.isLogin) {
                item = {
                    ...item,
                    component: () => <Redirect to="/admin/login" />,
                    children: [],
                }
            }

            let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
            newContextPath = newContextPath.replace(/\/+/g, '/')

            // let newContextPath;
            // if (/^\//.test(item.path)) {
            //     newContextPath = item.path;
            // } else {
            //     newContextPath = `${routeContextPath}/${item.path}`
            // }
            // newContextPath = newContextPath.replace(/\/+/g, '/');

            if (item.component && item.childRoutes) {
                const childRoutes = renderRoutes(item.childRoutes, newContextPath);
                children.push(
                    <Route
                        key={newContextPath}
                        render={props => <item.component {...props}>{childRoutes}</item.component>}
                        path={newContextPath}
                    />
                )
            } else if (item.component) {
                children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
            } else if (item.childRoutes) {
                item.childRoutes.forEach(r => renderRoute(r, newContextPath))
            }
        }

        routes.forEach(item => renderRoute(item, contextPath))

        return <Switch>{children}</Switch>
    }


    const children = renderRoutes(routes, '/');
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );


}

export default connect(
    state => state.user, {}
)(Root);
