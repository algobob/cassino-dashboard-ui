<script setup>
import { Collapse } from 'vue-collapsed'
import Padrao from "./Padrao.vue"
import { ref } from 'vue'

const isExpanded = ref(true)
const props = defineProps({
  padroes: Object,
  onPadraoClicked: Function
})

</script>
<template>
  <div style="display: flex; flex-direction: column; margin-top: 60px;" v-if="padroes">
    <h4 style="text-decoration: underline; margin-bottom: 30px;" @click="isExpanded = !isExpanded">Padroes</h4>
    <Collapse :when="isExpanded">
      <div style="display: flex;  gap: 60px;">
        <div>
          <Padrao v-if="Object.keys(padroes).length" v-for="padrao in Object.keys(padroes)" 
          :padrao="padrao.split(',')" 
          :data="padroes[padrao]"
          @padraoClicked="onPadraoClicked" />
        </div>
      </div>
    </Collapse>
  </div>
</template>
