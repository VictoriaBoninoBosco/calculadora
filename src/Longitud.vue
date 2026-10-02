<template>

  <div>

    <!-- Título -->

    <h2 class="text-h4 text-center mb-2">
       Metros → Pies
    </h2>


    <!-- Descripción -->

    <p class="text-center text-grey mb-6">
      Convertí una longitud de metros a pies.
    </p>



    <!--
      v-model guarda los metros
      ingresados por el usuario.
    -->

    <v-text-field
      v-model="metros"
      label="Ingresá los metros"
      type="number"
      variant="outlined"
      prepend-inner-icon="mdi-ruler"
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

      {{ metros }} m =
      <strong>{{ resultado.toFixed(2) }} pies</strong>

    </v-alert>

  </div>

</template>



<script setup>

import { ref } from 'vue'


// Guardamos los metros
const metros = ref(null)


// Guardamos el resultado
const resultado = ref(null)



// Función de conversión

function convertir() {

  if (metros.value !== null) {


    // 1 metro = 3.28084 pies

    resultado.value =
      metros.value * 3.28084

  }

}

</script>