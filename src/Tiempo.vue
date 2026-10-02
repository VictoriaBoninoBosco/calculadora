<template>

  <div>

    <!-- Título -->

    <h2 class="text-h4 text-center mb-2">
       Minutos → Horas
    </h2>


    <!-- Descripción -->

    <p class="text-center text-grey mb-6">
      Convertí una cantidad de minutos a horas.
    </p>



    <!--
      v-model conecta el input
      con la variable "minutos".
    -->

    <v-text-field
      v-model="minutos"
      label="Ingresá los minutos"
      type="number"
      variant="outlined"
      prepend-inner-icon="mdi-clock-outline"
      clearable
    ></v-text-field>



    <!-- Botón -->

    <v-btn
      color="deep-purple-accent-4"
      size="large"
      block
      @click="convertir"
    >

      Convertir

    </v-btn>



    <!--
      v-if muestra el resultado
      solamente cuando existe.
    -->

    <v-alert
      v-if="resultado !== null"
      type="success"
      variant="tonal"
      class="mt-6 text-center"
    >

      {{ minutos }} minutos =
      <strong>{{ resultado.toFixed(2) }} horas</strong>

    </v-alert>

  </div>

</template>



<script setup>

import { ref } from 'vue'


// Guardamos los minutos ingresados
const minutos = ref(null)


// Guardamos el resultado
const resultado = ref(null)



// Función de conversión

function convertir() {

  if (minutos.value !== null) {


    // Para convertir minutos a horas
    // dividimos los minutos por 60

    resultado.value =
      minutos.value / 60

  }

}

</script>