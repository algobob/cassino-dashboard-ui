<script setup>
const props = defineProps({
  padroes: Object
})

console.log('padroes ', props.padroes)
import Padrao from "./Padrao.vue"

</script>
<template>
  <div style="display: flex; flex-direction: column; flex-wrap: wrap; margin-top: 60px;" v-if="padroes">
    <h5 style="text-decoration: underline;">Padroes</h5>

        <div style="display: flex;  gap: 60px;">
        <div>
          <Padrao :padrao="[2,2,2]" :data="padroes['2,2,2']" />
          <Padrao :padrao="[2,1,2]" :data="padroes['2,1,2']" />
          <Padrao :padrao="[1,2,1]" :data="padroes['1,2,1']" />
          <Padrao :padrao="[2,2,1]" :data="padroes['2,2,1']" />
          <Padrao :padrao="[2,2,2,2]" :data="padroes['2,2,2,2']" />
          <Padrao :padrao="[2,2,2,2,2]" :data="padroes['2,2,2,2,2']" />
          <Padrao :padrao="[1,1,1]" :data="padroes['1,1,1']" />
          <Padrao :padrao="[1,1,1,1]" :data="padroes['1,1,1,1']" />
          <Padrao :padrao="[1,1,1,1,1]" :data="padroes['1,1,1,1,1']" />
          <Padrao :padrao="[1,1,1,1,1,1]" :data="padroes['1,1,1,1,1,1']" />
          <Padrao :padrao="[1,1,1,1]" :data="padroes['1,1,1,1']" />
          <Padrao :padrao="[2,1,2,1]" :data="padroes['2,1,2,1']" />
          <Padrao :padrao="[2,1,2,1,2,1]" :data="padroes['2,1,2,1,2,1']" />
          <!-- <PadraoSurf :qtd="3" :isGreen="true" :data="surf?.verde[3]" /> -->
        </div>
        <div>
          <!-- <PadraoSurf :qtd="2" :isGreen="false" :data="surf?.preto[2]" />
          <PadraoSurf :qtd="3" :isGreen="false" :data="surf?.preto[3]" /> -->
        </div>
      </div>
  </div>
</template>
