<template>
    <section class="w-[85%] m-auto py-[60px]">
        <h2 class="text-3xl font-bold mb-10">Mi perfil</h2>

        <article class="flex flex-co">
            <div class="flex flex-col bg-white rounded px-8 py-6">
                <h3 class="font-bold text-xl mb-5">Mis datos</h3>
                <Loader v-if="userLoading"/>

                <ul class="mb-2">
                    <li class="mb-4 text-lg">
                        <p class="text-sm">Username</p>
                        <p><b>{{ newUser.username }}</b></p>
                    </li>
                    <li class="mb-4 text-lg"> 
                        <p class="text-sm">Email</p>
                        <p><b>{{ newUser.email }}</b></p>
                    </li>
                    <li class="mb-4 text-lg"> 
                        <p class="text-sm">Rol</p>
                        <template v-if="newUser.rol == 1"> 
                            <p><b>Administrador</b></p>
                        </template>
                        <template v-else> 
                            <p><b>Cliente</b></p>
                        </template>
                    </li>
                </ul>

                <br>
        
                <div class="flex border-t-2 gap-4 border-yellow-400 pt-4">
                    <router-link class="disabled:bg-orange-700 text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/editar-usuario/${user.id}`">Editar mis datos</router-link>
                    <router-link class="disabled:bg-yellow-700 text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/usuario/T7wfIE3Wbieqz3dcgq1En72noFZ2/chat`"><b>Atención al cliente</b></router-link>
                </div>
            </div>
        </article>
    </section>

</template>

<script>
import { suscribeToAuth } from "../services/auth";
import { getUserProfileById, updateUser } from "../services/user";
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import Loader from "../components/Loader.vue";


    export default {
        name: "MyProfile",
        components: { BaseButton, BaseLabel, BaseInput, Loader },
        data(){
            return {
                userLoading: true,

                user: {
                    id: null,
                    email: null,
                    username: null,
                    rol: '2',
                },
                newUser: {},

            }
        },

        async mounted() {
            this.userLoading = true;

            suscribeToAuth(async user => {
                this.user = {...user};
                if(this.user.id != null){
                    this.newUser = await getUserProfileById(this.user.id);
                    console.log(this.newUser.id)
                }
                this.userLoading = false;
            })

    
        },
    }
</script>
