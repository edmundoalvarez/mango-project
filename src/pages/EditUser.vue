<template>
    <section class="w-[85%] m-auto py-[60px]">
        <div class="mb-6">
            <router-link class="text-yellow-500 bg-gray-900 py-1 px-4 rounded hover:bg-gray-700 transition-all" :to="`/mi-perfil`">Volver</router-link>
        </div>

        <h2 class="text-3xl font-bold mb-10 m-auto">Editar mis datos</h2>

        <Loader v-if="userLoading"/>

        <form 
            action="#"
            @submit.prevent="update(newUser)" 
        >
            <div class="mb-8">
                <BaseLabel for="title">Email</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="email" 
                    id="email" 
                    v-model="newUser.email"

                />
            </div>
            <div class="mb-8">
                <BaseLabel for="title">Username</BaseLabel>
                <BaseInput 
                    class="w-1/2" 
                    type="text" 
                    id="username" 
                    v-model="newUser.username"

                />
            </div>
            <BaseButton >Confirmar edición</BaseButton>
        </form>

    </section>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import { getUserProfileById, updateUser } from "../services/user.js";
import { suscribeToAuth } from "../services/auth";
import Loader from "../components/Loader.vue";



    export default {
        components: { BaseButton, BaseLabel, BaseInput, BaseTextarea, Loader },

        name: "EditService",
        data() {
            return {
                userLoading: true,

                user: {
                    id: null,
                    email: null,
                    username: null,
                    rol: '2',
                },
                newUser: {},

            }
        },

        methods: {
            update(data){
                updateUser(this.$route.params.id, data)
                .then(this.$router.push('/mi-perfil'));
            }
        },

        async mounted(){
            this.userLoading = true;

            suscribeToAuth(async user => {
                this.user = {...user};
                if(this.user.id != null){
                    this.newUser = await getUserProfileById(this.user.id);
                }

                this.userLoading = false;

            })
        }
    }

</script>
