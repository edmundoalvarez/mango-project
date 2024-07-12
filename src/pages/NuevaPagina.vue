<template>
  <!-- <div class="page"> -->
    <!-- <h1>{{ title }}</h1> -->
    <!-- <p>{{ description }}</p> -->
    <!-- Usando la propiedad computada fullDescription -->
    <!-- <p>{{ fullDescription }}</p> -->
  <!-- </div> -->
  <v-app>
    <v-main>
      <v-container>
        <v-card
          loading
          title="Card title"
          subtitle="Subtitle"
          text="..."
        >
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app> 
</template>

<script>
export default {
  name: 'NuevaPagina',
  data() {
    return {
      title: 'Nueva pagina para Edi',
      description: 'Aca iria la descripción del sitio'
    };
  },
  props: {
    // Define aquí las propiedades que el componente puede recibir
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