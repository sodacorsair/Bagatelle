import exampleRoute from '@/examples/routes';
import PageNotFound from '@/components/NotFound';
import homeRoutes from '@/views/routes';

const childRoutes = [
    homeRoutes,
    exampleRoute
]

const routes = [
    ...childRoutes.filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
    {
        path: '*',
        name: 'Page not found',
        component: PageNotFound
    }
]

const handleIndexRoute = (route) => {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }

    const indexRoute = route.childRoutes.find(child => child.isIndex);

    if (indexRoute) {
        const first = { ...indexRoute };
        first.path = '';
        first.exact = true;
        first.autoIndexRoute = true;
        route.childRoutes.unshift(first);
    }
    route.childRoutes.forEach(handleIndexRoute)
}

routes.forEach(handleIndexRoute);
export default routes;
