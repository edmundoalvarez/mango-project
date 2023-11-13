<template>
    <template v-if="!loading">
        <button 
            type="submit"
            class="transition-all disabled:bg-yellow-700 mt-2 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            :disabled="loading"
        >
        <slot>Enviar</slot>
        </button>
    </template>

    <template v-else class="h-full">
        <Loader/>
    </template>
</template>

<script>
    import Loader from './Loader.vue'
    export default {
        name: "BaseButton",
        components: { Loader },
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        }

    }
</script>
