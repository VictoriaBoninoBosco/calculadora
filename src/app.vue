<template>

  <!-- v-app es el contenedor principal de Vuetify -->
  <v-app>


    <!-- BARRA SUPERIOR -->

    <v-app-bar color="deep-purple-accent-4">

      <!-- Título de nuestra página -->
      <v-app-bar-title>
         Conversor de Unidades
      </v-app-bar-title>


      <!-- MENÚ DE UNIDADES -->

      <v-menu>

        <!--
          v-slot permite acceder a las propiedades
          que nos da el botón que abre el menú
        -->
        <template v-slot:activator="{ props }">

          <!--
            v-bind="props" conecta las propiedades
            del menú con este botón
          -->
          <v-btn
            v-bind="props"
            variant="outlined"
            class="mr-4"
          >

            Unidades

            <!-- Ícono de flecha -->
            <v-icon end>
              mdi-menu-down
            </v-icon>

          </v-btn>

        </template>


        <!-- Lista desplegable -->
        <v-list>


          <!--
            v-for repite este elemento por cada unidad
            que tenemos en el array "unidades"
          -->

          <v-list-item
            v-for="unidad in unidades"
            :key="unidad.nombre"
            :to="unidad.ruta"
          >

            <!-- Mostramos el ícono y nombre -->
            <v-list-item-title>
              {{ unidad.icono }} {{ unidad.nombre }}
            </v-list-item-title>

          </v-list-item>

        </v-list>

      </v-menu>

    </v-app-bar>



    <!-- CONTENIDO PRINCIPAL -->

    <v-main class="fondo">

      <v-container class="py-10">


        <!-- Tarjeta principal -->

        <v-card
          class="mx-auto pa-8"
          max-width="900"
          elevation="8"
          rounded="xl"
        >


          <!-- Título -->

          <v-card-title
            class="text-h3 text-center font-weight-bold"
          >

             Conversor de Unidades

          </v-card-title>


          <!-- Subtítulo -->

          <v-card-subtitle class="text-center mt-3">

            Elegí una conversión del menú para comenzar.

          </v-card-subtitle>


          <!-- Línea separadora -->

          <v-divider class="my-6"></v-divider>


          <!--
            router-view es el lugar donde Vue Router
            muestra el componente correspondiente.

            Por ejemplo:
            /kilometros → Kilometros.vue
            /peso → Peso.vue
          -->

          <router-view />

        </v-card>

      </v-container>

    </v-main>



    <!-- PIE DE PÁGINA -->

    <v-footer
      color="deep-purple-accent-4"
      class="text-center d-flex flex-column"
    >

      <div>
        Trabajo Práctico - Conversor de Unidades 💜
      </div>

    </v-footer>

  </v-app>

</template>



<script setup>

// Este array contiene todas las opciones
// que aparecen en el menú.

const unidades = [

  {
    nombre: 'Kilómetros → Millas',
    icono: '',
    ruta: '/kilometros'
  },

  {
    nombre: 'Celsius → Fahrenheit',
    icono: '',
    ruta: '/temperatura'
  },

  {
    nombre: 'Kilogramos → Libras',
    icono: '⚖️',
    ruta: '/peso'
  },

  {
    nombre: 'Metros → Pies',
    icono: '',
    ruta: '/longitud'
  },

  {
    nombre: 'Minutos → Horas',
    icono: '',
    ruta: '/tiempo'
  }

]

</script>



<style scoped>

/*
  Fondo de la página.
  Usamos un degradado con tonos violetas
  para darle un mejor diseño.
*/

.fondo {

  background: linear-gradient(
    135deg,
    #ede7f6,
    #f3e5f5,
    #e8eaf6
  );

  min-height: calc(100vh - 128px);

}

</style>