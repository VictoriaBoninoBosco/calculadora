// Importamos createApp para crear nuestra aplicación Vue
import { createApp } from 'vue'

// Importamos el componente principal
import App from './app.vue'

// Importamos los estilos de Vuetify
import 'vuetify/styles'

// Importamos los íconos de Vuetify
import '@mdi/font/css/materialdesignicons.css'

// Importamos Vuetify
import { createVuetify } from 'vuetify'

// Importamos todos los componentes de Vuetify
import * as components from 'vuetify/components'

// Importamos las directivas de Vuetify
import * as directives from 'vuetify/directives'

// Importamos nuestro router
import router from './router'


// Creamos la configuración de Vuetify
const vuetify = createVuetify({
  components,
  directives
})


// Creamos nuestra aplicación Vue
// .use(vuetify) permite utilizar Vuetify
// .use(router) permite utilizar Vue Router
// .mount('#app') conecta Vue con el div #app del index.html
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')