// plugins/vuetify.js
import 'vuetify/styles'; // Importa los estilos de Vuetify
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Opcional: Para usar íconos de Material Design

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', // Puedes cambiarlo a 'dark' si prefieres
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi', // Define el conjunto de íconos predeterminado
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
