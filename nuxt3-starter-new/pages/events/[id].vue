<script setup>
const route = useRoute();
console.log("🚀 ~ file: [id].vue:3 ~ route:", route.params)


</script>

<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>