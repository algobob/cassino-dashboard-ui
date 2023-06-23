<style scoped>
</style>
<script setup>
import Quadradinho from "./Quadradinho.vue"

const props = defineProps({
  velas: Array
})

</script>
<template>
  <div style="display: flex; flex-wrap: wrap; margin-top: 20px;"> 
    <div v-for="velaObj in velas">
      <Quadradinho :velaObj="velaObj" />
    </div>
  </div>
</template>
