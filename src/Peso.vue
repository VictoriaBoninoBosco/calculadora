<template>

  <div>

    <!-- Título -->

    <h2 class="text-h4 text-center mb-2">
      ⚖️ Kilogramos → Libras
    </h2>


    <!-- Descripción -->

    <p class="text-center text-grey mb-6">
      Convertí un peso de kilogramos a libras.
    </p>



    <!--
      v-model conecta el campo con
      la variable "kilogramos".
    -->

    <v-text-field
      v-model="kilogramos"
      label="Ingresá los kilogramos"
      type="number"
      variant="outlined"
      prepend-inner-icon="mdi-weight-kilogram"
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



    <!-- Resultado -->

    <v-alert
      v-if="resultado !== null"
      type="success"
      variant="tonal"
      class="mt-6 text-center"
    >

      {{ kilogramos }} kg =
      <strong>{{ resultado.toFixed(2) }} libras</strong>

    </v-alert>

  </div>

</template>



<script setup>

import { ref } from 'vue'


// Guardamos los kilogramos ingresados
const kilogramos = ref(null)


// Guardamos el resultado
const resultado = ref(null)



// Función para convertir

function convertir() {

  if (kilogramos.value !== null) {


    // 1 kilogramo = 2.20462 libras

    resultado.value =
      kilogramos.value * 2.20462

  }

}

</script>