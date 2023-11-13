<template>
    <section class="w-[85%] m-auto py-[60px]">

        <h2 class="text-3xl font-bold mb-6">Atención al cliente</h2>

        <article class="flex justify-between max-h-[450px] overflow-hidden">
            <div class="w-2/3 min-w-[320px] p-4 border-r-0 overflow-y-scroll bg-white">
                <template v-if="!userLoading">
                    <div v-for="message in messages" :key="message.id">
                        <div 
                            class="flex"
                            :class="{
                                'justify-end' : message.senderId === authUser.id,
                                'justify-start' : message.senderId !== authUser.id,
                            }"
                        >
                            <div 
                                class="flex justify-between gap-[80px] max-w-max mb-2 border rounded-md px-4 py-2"
                                :class="{
                                    'bg-yellow-400 text-black' : message.senderId === authUser.id,
                                    'bg-gray-700 text-white ' : message.senderId !== authUser.id,
                                }"
                            >
                                <p>{{message.message}}</p>
                                <p class="text-xs italic flex flex-col justify-center">{{ formatDate(message.created_at) || 'Enviando...' }}</p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <Loader />
                </template>
            </div>
    
            <form action="#"  @submit.prevent="handleSendMessage" class="w-1/3 min-w-[280px] bg-gray-800 p-6">
                <div class="mb-2">
                    <BaseLabel class="text-white" for="message">Mensaje</BaseLabel>
                    <BaseTextarea class=" h-[220px] w-full" id="message" v-model="newMessage.message"></BaseTextarea>
                </div>
                <div class="text-center">
                    <BaseButton 
                        class="w-full"
                        
                    />
                </div>
            </form>
            
        </article>
    </section>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseTextarea from '../components/BaseTextarea.vue';
import Loader from '../components/Loader.vue';
import { getUserProfileById } from '../services/user';
import { suscribeToAuth } from '../services/auth';
import { sendPrivateChatMessage, suscribeToPrivateChat } from '../services/private-chat';
import { dateToString } from '../helpers/date';

    export default {
    name: 'PrivateChat',
    components: { Loader, BaseButton, BaseTextarea, BaseLabel },
    data() {
        return {
            userLoading: true,

            user: {
                id: null,
                email: null,
            },

            authUser: {
                id: null,
                email: null,
            },

            unsuscribeAuth: () => {},

            newMessage: {
                message: ''
            },

            messagesLoading: true,
            messages: [],

            unsuscribeMessages: () => {},
        };
    },
    methods: {
        handleSendMessage(){
            sendPrivateChatMessage({
                senderId: this.authUser.id,
                receiverId: this.user.id,
                message: this.newMessage.message,
            })
            this.newMessage.message = '';
        },
        formatDate(date){
            return dateToString(date)
        }
    },
    async mounted() {
        this.userLoading = true;
        this.user = await getUserProfileById(this.$route.params.id);
        this.unsuscribeAuth = suscribeToAuth(newUser => this.authUser = newUser)
        this.userLoading = false;
        this.messagesLoading = true;
        this.unsuscribeMessages = await suscribeToPrivateChat(
            {
                senderId: this.authUser.id, 
                receiverId: this.user.id,
            }, 
            (newMessages) => this.messages = newMessages
        );
        this.messagesLoading = false;
    },
    unmounted( ) {
        this.unsuscribeAuth();
        this.unsuscribeMessages();
    },  
    components: { Loader, BaseButton, BaseLabel, BaseTextarea }
}
</script>
