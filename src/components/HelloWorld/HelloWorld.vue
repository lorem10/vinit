<template>
  <h1>Hello {{ text }}</h1>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ text: string }>(), {
  text: 'world'
})
</script>
