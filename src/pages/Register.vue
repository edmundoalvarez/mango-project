<template>
    <section class="w-[85%] m-auto py-[60px]">
        <h2 class="text-3xl font-bold mb-10">Crear una cuenta</h2>

        <article>
            <form 
                action="#"
                @submit.prevent="handleSubmit"
            >
                <div class="mb-2">
                    <BaseLabel for="email">Email</BaseLabel>
                    <BaseInput 
                        class="w-1/2" 
                        type="email" 
                        id="email" 
                        v-model="newUser.email"
                    />
                </div>
                <div class="mb-2">
                    <BaseLabel for="username">Username</BaseLabel>
                    <BaseInput 
                        class="w-1/2" 
                        type="text" 
                        id="username" 
                        v-model="newUser.username"
                    />
                </div>
                <div class="mb-2">
                    <BaseLabel for="password">Contraseña</BaseLabel>
                    <BaseInput 
                        class="w-1/2" 
                        type="password" 
                        id="password" 
                        v-model="newUser.password"

                    />
                </div>
                <BaseButton :loading="registerLoading">Registrarse</BaseButton>
            </form>
        </article>


    </section>
</template>

<script>
    import BaseButton from '../components/BaseButton.vue';
    import BaseInput from '../components/BaseInput.vue';
    import BaseLabel from '../components/BaseLabel.vue';
    import { register } from "../services/auth.js"


    export default {
        name: 'Register',
        components: { BaseButton, BaseLabel, BaseInput },
        data() {
            return {
                registerLoading: false,
                newUser: {
                    email: '',
                    username: '',
                    rol: '2',
                    password: '',
                },
            }
        },
        methods: {
            async handleSubmit() {
                this.registerLoading = true;

                try {
                    await register({...this.newUser});
                    this.$router.push('/mi-perfil');

                } catch (error) {
                    console.log(error)
                }

                this.registerLoading = false;
            }
        },
    }
</script>
