<template>
    <section class="w-[85%] m-auto py-[60px]">
        <div class="mb-6">
            <router-link class="text-yellow-500 bg-gray-900 py-1 px-4 rounded hover:bg-gray-700 transition-all" :to="`/servicios`">Volver</router-link>
        </div>

        <h2 class="text-3xl font-bold mb-10 m-auto mt-10">Estas por eliminar un servicio</h2>

        <div
            class="mb-8 flex flex-col justify-between h-[350px] w-5/12 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <Loader v-if="serviceLoading"/>
            <h3
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {{ service.title }}
            </h3>
            <p class="max-h-[300px] overflow-y-auto mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {{ service.description }}
            </p>
            <p>
                <b>Categoría:</b>
                <template v-if="service.cat == 'web'">
                    Diseño web
                </template>
                <template v-else-if="service.cat == 'graphic'">
                    Diseño gráfico
                </template>
            </p>
            <div class="flex align-middle content-center gap-2 text-lg font-bold border-t-2 border-yellow-500 pt-4">
                <div class="flex flex-col justify-center align-middle content-center mr-4">
                    
                    <p class="text-lg font-medium uppercase text-black">
                        Precio: $ {{ service.price }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center align-middle content-center w-5/12">
            <div class="flex flex-col bg-white rounded px-6 py-4  text-center">
                <p class="font-bold text-lg">¿Estas seguro de eliminar el servicio permanentemente?</p>
                <form 
                    action="#"
                    @submit.prevent="deleteService(service.id)" 
                >
                    <BaseButton class="bg-red-600">Sí, eliminar</BaseButton>
                </form>
            </div>
        </div>

    </section>
</template>

<script>
    import { deleteService, getServiceById } from "../services/service.js";
    import BaseButton from "../components/BaseButton.vue";
    import Loader from "../components/Loader.vue";

    export default {
        
        name: "DeleteService",
        components: { BaseButton, Loader},
        data() {
            return {
                serviceLoading: true,

                service: {
                    id: null,
                    title: null,
                    description: null,
                    price: null,
                    cat: null,
                },
            }
        },
        methods: {
            deleteService(id){
                deleteService(id)
                .then(this.$router.push('/servicios'));

            }
        },

        async mounted(){
            this.serviceLoading = true;
            this.service = await getServiceById(this.$route.params.id);
            this.service.id = this.$route.params.id;
            this.serviceLoading = false;
        }
    }
</script>
