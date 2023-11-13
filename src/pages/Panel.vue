<template>
    <section  class="w-[85%] m-auto py-[60px]">

        <h2 class="text-3xl font-bold mb-6">Clientes</h2>
        <Loader v-if="userLoading"/>
        <div v-for="user in users" :key="user.id">
            <article class="w-6/12 mb-2 border bg-white rounded-md">
                <div class="flex justify-between align-middle content-center px-8 py-6">
                    <div class="w-1/2 flex flex-col justify-start">
                        <p class="text-lg font-bold ">{{ user.username }}</p>
                        <p>{{ user.email }}</p>
                    </div>
                    <div class="w-1/3 flex flex-col justify-center align-middle content-center text-center  text-black bg-yellow-500 rounded hover:bg-yellow-300">
                        <router-link :to="`/usuario/${user.id}`"><b>Ver perfil</b></router-link>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import Loader from "../components/Loader.vue";
import { getAllUsers } from "../services/user";

    export default {
        name: "Panel",
        components: { Loader },
        data() {
            return{

               users: [],
               userLoading: true,


            }
        },
        mounted(){
            this.userLoading = true;

            getAllUsers().then((users) => {

                for (const user of users) {
                    if( user.rol != 1){
                        this.users.push(user)
                    }
                }
                this.userLoading = false;

            })
        }

    }
</script>
