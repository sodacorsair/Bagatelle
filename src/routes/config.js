import homeRoutes from '@/views/web/routes';
import exampleRoute from '@/examples/routes';
import adminRoutes from '@/views/admin/routes';
import rootRoutes from './rootRoutes';

const childRoutes = [
    exampleRoute,
    adminRoutes,
    rootRoutes,
    homeRoutes,
]

const routes = [
    // spread operator expand the result of filter into an array
    ...childRoutes.filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
]

// recursively find the index route node and handle that
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
