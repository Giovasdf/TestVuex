<template lang="">
    <div>
        <ul v-for="usuario in $store.state.usuarios">
            <li>{{usuario.nombre}} - {{usuario.correo}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
    }
</script>