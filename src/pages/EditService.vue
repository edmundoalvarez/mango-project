<template>
    <section class="w-[85%] m-auto py-[60px]">
        <div class="mb-6">
            <router-link class="text-yellow-500 bg-gray-900 py-1 px-4 rounded hover:bg-gray-700 transition-all" :to="`/servicios`">Volver</router-link>
        </div>

        <h2 class="text-3xl font-bold mb-10 m-auto">Editar un servicio</h2>
        
        <Loader v-if="serviceLoading"/>

        <form 
            action="#"
            @submit.prevent="update(newService)" 
        >
            <div class="mb-8">
                <BaseLabel for="title">Título del servicio</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="text" 
                    id="title" 
                    v-model="newService.title"

                />
            </div>
            <div class="mb-8">
                <BaseLabel for="description">Descripción</BaseLabel>
                <BaseTextarea 
                    class="w-1/2 h-[200px]" 
                    id="description" 
                    v-model="newService.description"

                > </BaseTextarea>
            </div>
            <div class="mb-8">
                <BaseLabel for="price">Precio</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="number" 
                    id="price" 
                    v-model="newService.price"
                />
            </div>
            <div class="mb-8">
                <BaseLabel for="cat">Categoria</BaseLabel>
                <select 
                name="cat" 
                id="cat"
                class="bg-white border text-black mt-2 py-1 px-4 rounded"
                >
                    <option disabled value="">Seleccionar una categoria</option>
                    <option :selected="newService.cat == 'graphic'"  value="graphic">Diseño gráfico</option>
                    <option  :selected="newService.cat == 'web'" value="web">Diseño web</option>

                </select>
            </div>
            <BaseButton >Editar servicio</BaseButton>
        </form>

    </section>
</template>

<script>
    import BaseButton from "../components/BaseButton.vue";
    import BaseLabel from "../components/BaseLabel.vue";
    import BaseInput from "../components/BaseInput.vue";
    import BaseTextarea from "../components/BaseTextarea.vue";
    import { updateService } from "../services/service.js";
    import { getServiceById } from '../services/service.js';
    import Loader from "../components/Loader.vue";

    export default {
        
        name: "EditService",
        components: { BaseButton, BaseLabel, BaseInput, BaseTextarea, Loader },

        data() {
            return {
                service: {
                    id: null,
                    title: null,
                    description: null,
                    price: null,
                    cat: null,
                },

                newService: {},
                serviceLoading: true,

            }
        },
        methods: {
            update(data){
                updateService(this.$route.params.id, data)
                .then(this.$router.push('/servicios'));
            }
        },

        async mounted(){
            this.serviceLoading = true;
            this.service = await getServiceById(this.$route.params.id);
            this.newService = await getServiceById(this.service.id);
            this.serviceLoading = false;
        }
    }

</script>
