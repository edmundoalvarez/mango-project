<template>
    <section class="w-[85%] m-auto py-[60px]">
        <h2 class="text-3xl font-bold mb-10">Iniciar sesión</h2>

        <article>
            <form 
                action="#"
                @submit.prevent="doLogin" 
            >
                <div class="mb-2">
                    <BaseLabel for="email">Email</BaseLabel>
                    <BaseInput 
                        :disabled="loginLoading"
                        class="w-1/2" 
                        type="email" 
                        id="email" 
                        v-model="form.email"
                    />
                </div>
                <div class="mb-2">
                    <BaseLabel for="password">Contraseña</BaseLabel>
                    <BaseInput 
                        :disabled="loginLoading"
                        class="w-1/2" 
                        type="password" 
                        id="password" 
                        v-model="form.password"

                    />
                </div>
                <BaseButton :loading="loginLoading">Iniciar sesión</BaseButton>
            </form>
        </article>


    </section>
</template>

<script>
    import BaseButton from "../components/BaseButton.vue";
    import BaseLabel from "../components/BaseLabel.vue";
    import BaseInput from "../components/BaseInput.vue";
    import { login } from "../services/auth.js"

    export default {
        name: 'Login',
        components: { BaseButton, BaseLabel, BaseInput },
        emits: ['login'],

        data() {
            return {
                loginLoading: false,
                form: {
                    email: '',
                    password: '',
                }
            }
        },

        methods: {
            doLogin(){
                this.loginLoading = true;

                login({
                    email: this.form.email,
                    password: this.form.password,
                })
                .then(user => {
                    this.$router.push('/');

                })
                .finally(() => {
                    this.loginLoading = false;
                });


            }
        }
    }
</script>
