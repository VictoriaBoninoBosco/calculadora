// Importamos las funciones necesarias para crear las rutas
import { createRouter, createWebHistory } from 'vue-router'


// Importamos cada componente de conversión
// Todos están directamente dentro de src
import Kilometros from './Kilometros.vue'
import Temperatura from './Temperatura.vue'
import Peso from './Peso.vue'
import Longitud from './Longitud.vue'
import Tiempo from './Tiempo.vue'


// Creamos el router
const router = createRouter({

  // createWebHistory permite navegar usando URLs normales
  history: createWebHistory(),


  // Acá definimos todas las rutas de nuestra página
  routes: [

    // Si entramos a la página principal,
    // automáticamente nos lleva a kilómetros
    {
      path: '/',
      redirect: '/kilometros'
    },


    // Ruta para el conversor de kilómetros
    {
      path: '/kilometros',
      component: Kilometros
    },


    // Ruta para el conversor de temperatura
    {
      path: '/temperatura',
      component: Temperatura
    },


    // Ruta para el conversor de peso
    {
      path: '/peso',
      component: Peso
    },


    // Ruta para el conversor de longitud
    {
      path: '/longitud',
      component: Longitud
    },


    // Ruta para el conversor de tiempo
    {
      path: '/tiempo',
      component: Tiempo
    }

  ]

})


// Exportamos el router para poder utilizarlo en main.js
export default router