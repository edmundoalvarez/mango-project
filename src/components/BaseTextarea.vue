<template>
    <textarea 
        class="px-4 py-2 rounded resize-none" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>

</template>

<script>
    export default {
        name: "BaseTextarea",

        props: ['modelValue'],
        emits: ['update:modelValue'],
    }
</script>


