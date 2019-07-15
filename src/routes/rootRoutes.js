import Login from '@/views/admin/login';
import Register from '@/views/admin/register';

export default {
    path: '',
    childRoutes: [{ path: 'login', component: Login }, { path: 'register', component: Register }],
}
