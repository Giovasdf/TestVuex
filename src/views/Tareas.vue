<template lang="">
    <div>
        <ul v-for="tarea in $store.state.tareas">
            <li>{{tarea.id}}. {{tarea.descripcion}} - {{tarea.estado}}</li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>