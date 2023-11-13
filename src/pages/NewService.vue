<template>
    <section class="w-[85%] m-auto py-[60px]">
        <div class="mb-6">
            <router-link class="text-yellow-500 bg-gray-900 py-1 px-4 rounded hover:bg-gray-700 transition-all" :to="`/servicios`">Volver</router-link>
        </div>
        <h2 class="text-3xl font-bold mb-10 m-auto mt-10">Crear un servicio</h2>

        <form 
            action="#"
            @submit.prevent="handleCreateService"
        >
            <div class="mb-2">
                <BaseLabel for="title">Título del servicio</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="text" 
                    id="title" 
                    v-model="form.title"
                />
            </div>
            <div class="mb-2">
                <BaseLabel for="description">Descripción</BaseLabel>
                <BaseTextarea 
                    class="w-1/2" 
                    id="description" 
                    v-model="form.description"
                > </BaseTextarea>
            </div>
            <div class="mb-2">
                <BaseLabel for="price">Precio</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="number" 
                    id="price" 
                    v-model="form.price"
                />
            </div>
            <div class="mb-2">
                <BaseLabel for="cat">Categoria</BaseLabel>
                <select 
                name="cat" 
                id="cat"
                class="bg-white border text-black mt-2 py-1 px-4 rounded"
                v-model="form.cat" 
                >
                    <option disabled value="">Seleccionar una categoria</option>
                    <option value="graphic">Diseño gráfico</option>
                    <option value="web">Diseño web</option>

                </select>
            </div>
            
            <BaseButton>Crear servicio</BaseButton>
        </form>

    </section>
</template>

<script>
    import BaseButton from "../components/BaseButton.vue";
    import BaseLabel from "../components/BaseLabel.vue";
    import BaseInput from "../components/BaseInput.vue";
    import BaseTextarea from "../components/BaseTextarea.vue";
    import { createService } from "../services/service.js";

    export default {
        components: { BaseButton, BaseLabel, BaseInput, BaseTextarea },

        name: "NewService",
        data() {
            return {
                form: {
                    title: '',
                    description: '',
                    price: '',
                    cat: '',
                }
            }
        },

        methods: {

            async handleCreateService() {
                try {
                    createService({...this.form});
                    this.$router.push('/servicios');

                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>
