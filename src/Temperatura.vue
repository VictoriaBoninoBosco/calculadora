<template>

  <div>

    <!-- Título -->

    <h2 class="text-h4 text-center mb-2">
      🌡 Celsius → Fahrenheit
    </h2>


    <!-- Descripción -->

    <p class="text-center text-grey mb-6">
      Convertí una temperatura de Celsius a Fahrenheit.
    </p>



    <!--
      v-model guarda el valor ingresado
      por el usuario en "celsius".
    -->

    <v-text-field
      v-model="celsius"
      label="Ingresá los grados Celsius"
      type="number"
      variant="outlined"
      prepend-inner-icon="mdi-thermometer"
      clearable
    ></v-text-field>



    <!-- Botón de conversión -->

    <v-btn
      color="deep-purple-accent-4"
      size="large"
      block
      @click="convertir"
    >

      Convertir

    </v-btn>



    <!--
      v-if muestra el resultado solamente
      después de realizar la conversión.
    -->

    <v-alert
      v-if="resultado !== null"
      type="success"
      variant="tonal"
      class="mt-6 text-center"
    >

      {{ celsius }} °C =
      <strong>{{ resultado.toFixed(2) }} °F</strong>

    </v-alert>

  </div>

</template>



<script setup>

import { ref } from 'vue'


// Guardamos los grados Celsius
const celsius = ref(null)


// Guardamos el resultado
const resultado = ref(null)



// Función para convertir Celsius a Fahrenheit

function convertir() {

  if (celsius.value !== null) {


    // Fórmula:
    // Fahrenheit = (Celsius × 9/5) + 32

    resultado.value =
      (celsius.value * 9 / 5) + 32

  }

}

</script>