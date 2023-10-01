<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"

</script>
<template>  
      <div class="flex-container">
            <div class="card">
              <div class="card-body">
                <h5 style="margin-bottom: 2%;">* Surf</h5>
                <PadraoSurf :qtd="2" :probability="estrategias?.padroes?.surf?.duplo"/>             
                <PadraoSurf :qtd="3" :probability="estrategias?.padroes?.surf?.triplo"/>             
                <PadraoSurf :qtd="4" :probability="estrategias?.padroes?.surf?.quadruplo"/>             
              </div>
            </div>
      </div>    
</template>
