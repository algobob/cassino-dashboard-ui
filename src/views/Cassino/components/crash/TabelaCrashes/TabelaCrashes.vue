<style scoped>
</style>
<script setup>
import Vela from "../Vela.vue"

const props = defineProps({
  velas: Array
})

</script>
<template>
  <div style="display: flex; flex-wrap: wrap; margin-top: 20px; flex-direction: row-reverse;"> 
    <div v-for="velaObj in velas">
      <Vela :vela="velaObj?.vela" :createdAt="velaObj?.created" />
    </div>
  </div>
</template>
