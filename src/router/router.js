import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import Panel from './../pages/Panel.vue';
import Login from './../pages/Login.vue';
import Register from './../pages/Register.vue';
import MyProfile from './../pages/MyProfile.vue';
import EditUser from './../pages/EditUser.vue';
import UserProfile from './../pages/UserProfile.vue';
import PrivateChat from './../pages/PrivateChat.vue';
import Services from './../pages/Services.vue';
import NewService from './../pages/NewService.vue';
import EditService from './../pages/EditService.vue';
import DeleteService from './../pages/DeleteService.vue';
import NuevaPagina from './../pages/NuevaPagina.vue';
import UserCard from './../pages/UserCard.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { suscribeToAuth } from '../services/auth';

const routes = [
    { path: '/',                        component: Home },
    { path: '/quienes-somos',           component: About },
    { path: '/servicios',               component: Services },
    { path: '/iniciar-sesion',          component: Login },
    { path: '/registro',                component: Register },
    { path: '/panel-administracion',    component: Panel,               meta: {requiresAuth: true}, },
    { path: '/nuevo-servicio',          component: NewService,          meta: {requiresAuth: true}, },
    { path: '/editar-servicio/:id',     component: EditService,         meta: {requiresAuth: true}, },
    { path: '/eliminar-servicio/:id',   component: DeleteService,       meta: {requiresAuth: true}, },
    { path: '/mi-perfil',               component: MyProfile,           meta: {requiresAuth: true}, },
    { path: '/editar-usuario/:id',      component: EditUser,            meta: {requiresAuth: true}, },
    { path: '/usuario/:id',             component: UserProfile,         meta: {requiresAuth: true}, },
    { path: '/usuario/:id/chat',        component: PrivateChat,         meta: {requiresAuth: true}, },
    { path: '/nuevapagina',             component: NuevaPagina },
    { path: '/usercard',                component: UserCard },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

let user = {
    id: null,
    email: null,
}
suscribeToAuth(newUser => user = {...newUser});

router.beforeEach((to, from) => {
    if(user.id === null && to.meta.requiresAuth){
        return '/iniciar-sesion';
    }
})

export default router;