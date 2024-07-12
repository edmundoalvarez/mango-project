<template>
  <div class="page">
    <div>
        <h1>{{ name }}</h1>
        <h2>{{ email }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',

  data() {

    return {
        
    }
  },

  props: {
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
  },
  components: {
    // Registra componentes hijos aquí (botones, elementos)
  },
  methods: {
    // Define métodos/funciones del componente aquí
  },
  computed: {
    // Define propiedades computadas basadas en el estado del componente o en sus propiedades.
    fullDescription() {
      return this.title + ' - ' + this.description;
    }
  },
  watch: {
    // Define observadores para propiedades reactivas aquí. Permite observar y reaccionar a los cambios en propiedades o datos del componente.
    initialTitle(newVal) {
      this.title = newVal;
    }
  },
  created() {
    // Código a ejecutar cuando se crea la instancia del componente
    console.log('Componente creado');
  },
  mounted() {
    // Código a ejecutar cuando el componente se monta en el DOM
    console.log('Componente montado en el DOM');
  },
  // Otros hooks del ciclo de vida también pueden ser usados (beforeCreate, beforeMount, etc.)
  beforeCreate() {
    console.log('Antes de la creación del componente');
  },
  beforeMount() {
    console.log('Antes de montar el componente en el DOM');
  }
};
</script>

<style scoped>
.page {
  /* Estilos específicos del componente */
}
</style>