<script setup>
import { Collapse } from 'vue-collapsed'
import { ref } from 'vue'

const isExpanded = ref(true)
const props = defineProps({
  padroes: Object
})

console.log('padroes ', props.padroes)
import Padrao from "./Padrao.vue"

</script>
<template>
  <div style="display: flex; flex-direction: column; margin-top: 60px;" v-if="padroes">
    <h4 style="text-decoration: underline; margin-bottom: 30px;" @click="isExpanded = !isExpanded">Padroes</h4>
    <Collapse :when="isExpanded">
      <div style="display: flex;  gap: 60px;">
        <div>
          <Padrao :padrao="[2, 2, 2]" :data="padroes['2,2,2']" />
          <Padrao :padrao="[2, 1, 2]" :data="padroes['2,1,2']" />
          <Padrao :padrao="[1, 2, 1]" :data="padroes['1,2,1']" />
          <Padrao :padrao="[2, 2, 1]" :data="padroes['2,2,1']" />
          <Padrao :padrao="[2, 2, 1, 1]" :data="padroes['2,2,1,1']" />
          <Padrao :padrao="[1, 1, 2, 2]" :data="padroes['1,1,2,2']" />
          <Padrao :padrao="[2, 2, 2, 2]" :data="padroes['2,2,2,2']" />
          <Padrao :padrao="[2, 2, 2, 2, 2]" :data="padroes['2,2,2,2,2']" />
          <Padrao :padrao="[1, 1, 1]" :data="padroes['1,1,1']" />
          <Padrao :padrao="[1, 1, 1, 1]" :data="padroes['1,1,1,1']" />
          <Padrao :padrao="[1, 1, 1, 1, 1]" :data="padroes['1,1,1,1,1']" />
          <Padrao :padrao="[1, 1, 1, 1, 1, 1]" :data="padroes['1,1,1,1,1,1']" />
          <Padrao :padrao="[1, 1, 1, 1]" :data="padroes['1,1,1,1']" />
          <Padrao :padrao="[1, 1]" :data="padroes['1,1']" />
          <Padrao :padrao="[2, 1, 2, 1]" :data="padroes['2,1,2,1']" />
          <Padrao :padrao="[2, 1, 2, 1, 2, 1]" :data="padroes['2,1,2,1,2,1']" />
        </div>
      </div>
    </Collapse>
  </div>
</template>
