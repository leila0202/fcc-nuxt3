<script setup>
const nuxt = useNuxtApp()
//console.log("🚀 ~ file: [id].vue:3 ~ nuxt:", nuxt)



</script>

<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>