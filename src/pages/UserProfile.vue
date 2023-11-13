<template>
    <section  class="w-[85%] m-auto py-[60px]">
        <div class="mb-6">
            <router-link class="text-yellow-500 bg-gray-900 py-1 px-4 rounded hover:bg-gray-700 transition-all" :to="`/panel-administracion`">Volver</router-link>
        </div>

        <Loader v-if="userLoading"/>
        <template v-else>
            <h2 class="text-3xl font-bold mb-6">Perfil de {{ user.email }}</h2>

            <hr class="mb-8">

            <ul class="mb-8">
                <li><b>Username: </b>{{ user.username }}</li>
                <li><b>Email: </b>{{ user.email }}</li>
            </ul>

            <router-link 
            class="transition-all disabled:bg-yellow-700 mt-2 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" 
                :to="`/usuario/${user.id}/chat`" >
                Ir al chat privado
                </router-link>
        </template>

    </section>

</template>

<script>
import { getUserProfileById } from '../services/user';
import Loader from "../components/Loader.vue";

    export default {
        name: "UserProfile",
        components: { Loader },
        data() {
            return {
                userLoading: true,
                user: {
                    id: null,
                    email: null,
                }
            }
        },
        async mounted(){
            this.userLoading = true;
            this.user = await getUserProfileById(this.$route.params.id);
            this.userLoading = false;
        }
        
    }
</script>
