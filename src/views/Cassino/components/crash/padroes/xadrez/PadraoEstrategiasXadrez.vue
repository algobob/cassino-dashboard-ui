<script setup>
const props = defineProps({
  xadrez: Object
})

console.log(props.estrategias)
import PadraoXadrez from "./PadraoXadrez.vue"
</script>
<template>
  <div class="flex-container" style="width: fit-content;">
    <h5 style="margin-top: 3%; margin-bottom: 6%; text-decoration: underline;">Xadrez</h5>
    <PadraoXadrez :qtd="2" :probability="xadrez[2]?.probabilidade" v-show="xadrez[2]?.probabilidade"/>
    <PadraoXadrez :qtd="3" :probability="xadrez[3]?.probabilidade" v-show="xadrez[3]?.probabilidade"/>
  </div>
</template>
