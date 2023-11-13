

<template>
    <header class="flex justify-between items-center gap-5 px-24 h-[80px] bg-gray-800">
        <div>
            <h1 class="text-white logo">Mango</h1>
        </div>
        <nav>
            <ul class="flex space-x-4">
                <li><router-link class="text-white hover:text-yellow-500" to="/">Home</router-link></li>
                <li><router-link class="text-white hover:text-yellow-500" to="/quienes-somos">Quienes somos</router-link></li>
                <li><router-link class="text-white hover:text-yellow-500" to="/servicios">Servicios</router-link></li>
                <template v-if="newUser.rol == 1">
                    <li><router-link class="text-white" to="/panel-administracion">Panel</router-link></li>
                </template>
                <template v-else-if ="newUser.rol == 2">
                    <li><router-link class="text-white hover:text-yellow-500" :to="`/usuario/T7wfIE3Wbieqz3dcgq1En72noFZ2/chat`">Atencion al cliente</router-link></li>
                    <li><router-link class="text-white hover:text-yellow-500" to="/mi-perfil">Mi Perfil</router-link></li>
                </template>
                <template v-if="user.id === null">
                    <li><router-link class="text-white hover:text-yellow-500" to="/iniciar-sesion">Iniciar Sesion</router-link></li>
                    <li><router-link class="text-white hover:text-yellow-500" to="/registro">Registrarse</router-link></li>
                </template>
                <template v-else>
                    <li>
                        <form 
                            action=""
                            @submit.prevent="handleLogout"
                        >
                            <button class="text-white hover:text-orange-600" type="submit"><b>{{user.email}}</b> (cerrar sesión)</button>
                        </form>
                    </li>
                </template>
            </ul>
        </nav>
    </header>
    <div class="container m-auto h-full mt-[15px] ">
        <router-view

        ></router-view>
    </div>
    <footer class="flex justify-center items-center bg-gray-900 text-white h-[120px]">
        <p class="">Edmundo Alvarez - Escuela Da Vinci</p>
    </footer>
</template>

<script>
import { suscribeToAuth, logout } from "./services/auth.js";
import { getUserProfileById } from "./services/user";

export default {
    name: "App",
    data(){
        return {
            user: {
                id: null,
                email: null,
                username: null,
                rol: null,
            },
            newUser: {}
        }
    },
    methods: {
        handleLogout(){
            logout();
            this.newUser = {
                id: null,
                email: null,
                username: null,
                rol: null,
            }
            this.$router.push('/iniciar-sesion');
        }
    },
    async mounted() {
        suscribeToAuth(async user => {
            this.user = {...user};
            if(this.user.id != null){
                this.newUser = await getUserProfileById(this.user.id);
                //console.log(this.newUser)
            }
        });

        //TODO: Que la pagina recarge sola por primera vez
        //this.newUser = await getUserProfileById(this.user.id);

        //console.log(this.user)
    },

};

</script>

