<script setup>
import { useStore } from 'vuex'
const store = useStore()

const increment = () => {
  store.commit('increment');
}
</script>

<template>
  <div>
    <ul v-for="tarea in $store.state.tareas">
      {{ tarea.id }} - {{ tarea.descripcion }} Estado: {{ tarea.estado }} </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
