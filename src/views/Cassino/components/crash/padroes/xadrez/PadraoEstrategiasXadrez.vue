<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoXadrez from "./PadraoXadrez.vue"

</script>
<template>  
      <div class="flex-container" style="width: fit-content;">
            <div class="card">
              <div class="card-body">
                <h5 style="margin-bottom: 2%;">* Xadrez</h5>
                <PadraoXadrez :qtd="1" :probability="estrategias?.padroes?.xadrez?.simples"/>             
                <PadraoXadrez :qtd="2" :probability="estrategias?.padroes?.xadrez?.duplo"/>             
                <PadraoXadrez :qtd="3" :probability="estrategias?.padroes?.xadrez?.triplo"/>             
              </div>
            </div>
      </div>    
</template>
