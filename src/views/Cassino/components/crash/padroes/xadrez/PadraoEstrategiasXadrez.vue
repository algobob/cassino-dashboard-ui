<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoXadrez from "./PadraoXadrez.vue"
</script>
<template>
  <div class="flex-container" style="width: fit-content;">
    <h5 style="margin-top: 3%; margin-bottom: 6%; text-decoration: underline;">Xadrez</h5>
    <PadraoXadrez :qtd="1" :probability="estrategias?.padroes?.xadrez?.simples" />
    <PadraoXadrez :qtd="2" :probability="estrategias?.padroes?.xadrez?.duplo" />
    <PadraoXadrez :qtd="3" :probability="estrategias?.padroes?.xadrez?.triplo" />
  </div>
</template>
