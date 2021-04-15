<template>
    <h3>Version : 1.0.0</h3>
    <div>
        <TypeSpeed />
    </div>
    <router-link to="/">Go Back</router-link>
</template>

<script>
import TypeSpeed from '../components/TypeSpeed'

export default {
    name: 'About',
    components: {
        TypeSpeed
    }
}
</script>