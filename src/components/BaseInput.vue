<template>
    <input 
        class="border px-4 py-2 rounded disabled:bg-gray-200"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
    export default {
        name: "BaseInput",

        props: ['modelValue'],
        emits: ['update:modelValue'],
    }
</script>
