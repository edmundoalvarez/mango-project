import "./src/main.css";
import {createApp} from "vue";
import App from "./src/App.vue";
import router from './src/router/router';
import vuetify from './src/plugins/vuetify'; // Importa la configuración de Vuetify
import { loadFonts } from './src/plugins/webfontloader'; // Opcional: Para cargar fuentes


const app = createApp(App);

app.use(router)
app.use(vuetify)
app.mount('#app');
