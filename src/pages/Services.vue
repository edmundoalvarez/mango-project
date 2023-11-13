<template>
    <section class="w-[80%] m-auto">
        <h2 class="text-3xl font-bold mb-10  m-auto mt-10">Nuestros servicios</h2>

        <template v-if="newUser.rol == 1">
            <router-link class=" font-bold bg-yellow-300 text-black rounded px-[8px] py-[6px] hover:text-yellow-400 hover:bg-gray-900" to="/nuevo-servicio">Agregar nuevo servicio</router-link>
        </template>
        
        <article class="mt-0">
            <h3 class="text-2xl font-bold mb-5 mt-10 m-auto">Diseño gráfico</h3>
            <Loader v-if="serviceLoading"/>
            <div class="flex flex-wrap justify-start gap-5 m-auto">
                <template v-for="service in graphicService" :key="service.id">

                <div
                    class="flex flex-col justify-between h-[300px] w-5/12 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {{ service.title }}
                    </h5>
                    <p class="max-h-[300px] h-full overflow-y-auto mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {{ service.description }}
                    </p>
                    <div class="flex align-middle content-center gap-2 text-lg font-bold border-t-2 border-yellow-500 pt-4">
                        <div class="flex flex-col justify-center align-middle content-center mr-4">
                            <p class="text-lg font-bold uppercase text-black">
                                Precio: $ {{ service.price }}
                            </p>
                        </div>
                        <template v-if="newUser.rol == 1">
                            <router-link class="disabled:bg-orange-700 text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/editar-servicio/${service.id}`">Editar</router-link>
                            <router-link class="disabled:bg-red-700 text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/eliminar-servicio/${service.id}`">Eliminar</router-link>
                        </template>
                    </div>
                </div>


                </template>
    
            </div>
        </article>
        
        <article class="mt-20 mb-20">
            <h3 class="text-2xl font-bold mb-10 m-auto">Diseño web</h3>
            <Loader v-if="serviceLoading"/>
            <div class="flex flex-wrap justify-start gap-5 m-auto">
                <template v-for="service in webService" :key="service.id">
                
                <div
                    class="flex flex-col justify-between h-[300px] w-5/12 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {{ service.title }}
                    </h5>
                    <p class="max-h-[300px] overflow-y-auto mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {{ service.description }}
                    </p>
                    <div class="flex align-middle content-center gap-2 text-lg font-bold border-t-2 border-yellow-500 pt-4">
                        <div class="flex flex-col justify-center align-middle content-center mr-4">
                            <p class="text-lg font-bold uppercase text-black">
                                Precio: $ {{ service.price }}
                            </p>
                        </div>
                        <template v-if="newUser.rol == 1">
                            <router-link class="disabled:bg-orange-700 text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/editar-servicio/${service.id}`">Editar</router-link>
                            <router-link class="disabled:bg-red-700 text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" :to="`/eliminar-servicio/${service.id}`">Eliminar</router-link>
                        </template>
                    </div>
                </div>


                </template>
    
            </div>
        </article>


    </section>
</template>

<script>

import { getAllServices, deleteService } from "../services/service.js";
import { getUserProfileById } from "../services/user.js";
import { suscribeToAuth } from "../services/auth.js";
import Loader from "../components/Loader.vue";

    export default {
        name: 'Services',
        components: { Loader },

        data(){
            return {
                serviceLoading: true,

                graphicService: [],
                webService: [],

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
            deleteService(id){
                deleteService(id)
                location.reload();
            }
        },

        async mounted() {
            this.serviceLoading = true;
            
            getAllServices()
            .then((services) => {

                for (const service of services) {
                    
                    if(service.cat == 'web'){

                        this.webService.push(service)
                    } else {

                        this.graphicService.push(service)
                    }
                }
                
                suscribeToAuth(async user => {
                    this.user = {...user};
                    if(this.user.id != null){
                        this.newUser = await getUserProfileById(this.user.id);
                    }
                });

                this.serviceLoading = false;
                
            })
                    
        },
    }
</script>
