<!-- <script setup>
const props = defineProps({
  surf: Object
})

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"
import Padrao from "./Padrao.vue"

</script>
<template>
  <div style="display: flex; flex-direction: column;">
        <h5 style="margin-bottom: 2%; margin-top: 2%; width: 100%; text-decoration: underline;">Surf</h5>
        <div style="display: flex;  gap: 60px;">
        <div>
          <Padrao :padrao="[2,2,2,2]" :data="surf?.verde[2]" />
          <PadraoSurf :qtd="3" :isGreen="true" :data="surf?.verde[3]" />
        </div>
        <div>
          <PadraoSurf :qtd="2" :isGreen="false" :data="surf?.preto[2]" />
          <PadraoSurf :qtd="3" :isGreen="false" :data="surf?.preto[3]" />
        </div>
      </div>
  </div>
</template> -->
