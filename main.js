/* import { saveChatMessage, suscribeChatMessage } from "./src/services/chat";


 const salida = document.querySelector('.salida');
 const formChat = document.querySelector('#formChat');
 const user = document.querySelector('#user');
 const message = document.querySelector('#message');

 formChat.addEventListener('submit', function(env){

    env.preventDefault();

    const data = {
      user: user.value,
      message: message.value
    }

    saveChatMessage(data)
    .then(()=> {
      user.value = '';
      message.value = '';
    });
 })

 suscribeChatMessage(messages => {
    salida.innerHTML = messages.map(message => `<div>
    <div><b>${message.user}:</b> ${message.message}</div>
    </div>`).join('');
 })

 */

import "./src/main.css";
import {createApp} from "vue";
import App from "./src/App.vue";
import router from './src/router/router';

const app = createApp(App);

app.use(router)

app.mount('#app');
