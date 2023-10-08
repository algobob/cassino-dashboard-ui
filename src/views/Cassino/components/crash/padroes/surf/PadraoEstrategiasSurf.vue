<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"

</script>
<template>
  <div style="display: flex; flex-direction: column;">
        <h5 style="margin-bottom: 2%; margin-top: 2%; width: 100%; text-decoration: underline;">Surf</h5>
        <div style="display: flex;  gap: 60px;">
        <div>
          <PadraoSurf :qtd="2" :isGreen="true" :probability="estrategias?.padroes?.surf?.verde?.duplo" />
          <PadraoSurf :qtd="3" :isGreen="true" :probability="estrategias?.padroes?.surf?.verde?.triplo" />
          <PadraoSurf :qtd="4" :isGreen="true" :probability="estrategias?.padroes?.surf?.verde?.quadruplo" />
        </div>
        <div>
          <PadraoSurf :qtd="2" :isGreen="false" :probability="estrategias?.padroes?.surf?.preto?.duplo" />
          <PadraoSurf :qtd="3" :isGreen="false" :probability="estrategias?.padroes?.surf?.preto?.triplo" />
          <PadraoSurf :qtd="4" :isGreen="false" :probability="estrategias?.padroes?.surf?.preto?.quadruplo" />
        </div>
      </div>
  </div>
</template>
