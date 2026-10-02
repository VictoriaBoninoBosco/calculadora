<template>

  <div>

    <!-- Título del conversor -->

    <h2 class="text-h4 text-center mb-2">
       Kilómetros → Millas
    </h2>


    <!-- Explicación -->

    <p class="text-center text-grey mb-6">
      Convertí una distancia de kilómetros a millas.
    </p>



    <!--
      v-model conecta el input con la variable
      "kilometros".

      Lo que escriba el usuario se guarda
      automáticamente en esa variable.
    -->

    <v-text-field
      v-model="kilometros"
      label="Ingresá los kilómetros"
      type="number"
      variant="outlined"
      prepend-inner-icon="mdi-map-marker-distance"
      clearable
    ></v-text-field>



    <!--
      @click ejecuta la función "convertir"
      cuando hacemos clic en el botón.
    -->

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
      cuando resultado tiene un valor.
    -->

    <v-alert
      v-if="resultado !== null"
      type="success"
      variant="tonal"
      class="mt-6 text-center"
    >

      {{ kilometros }} km =
      <strong>{{ resultado.toFixed(2) }} millas</strong>

    </v-alert>

  </div>

</template>



<script setup>

// ref permite crear variables reactivas
import { ref } from 'vue'


// Variable donde guardamos los kilómetros ingresados
const kilometros = ref(null)


// Variable donde guardamos el resultado
const resultado = ref(null)



// Función que realiza la conversión
function convertir() {


  // Comprobamos que el usuario haya ingresado un número

  if (kilometros.value !== null) {


    // Fórmula:
    // 1 kilómetro = 0.621371 millas

    resultado.value = kilometros.value * 0.621371

  }

}

</script>

