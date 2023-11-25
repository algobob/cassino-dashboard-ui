<script setup>
const props = defineProps({
  padroes: Object,
  onPadraoClicked: Function
})

import { Collapse } from 'vue-collapsed'
import { ref } from 'vue'

const isExpanded = ref(true)

console.log(props.estrategias)
import PadraoCorTargetProbabilidade from "./PadraoCorTargetProbabilidade.vue"

</script>
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;" v-if="padroes">
    <div>
      <h4 @click="isExpanded = !isExpanded">* Padroes</h4>
      <!-- <div class="card"> -->
        <Collapse :when="isExpanded">
        <div class="card-body">
          <div style="display: flex; gap: 60px;">
            <div style="display: flex; flex-direction: column; max-height: 800px; overflow-y: auto;">
              <PadraoCorTargetProbabilidade v-if="Object.keys(padroes).length" v-for="padrao in Object.keys(padroes)" :padrao="padrao" :data="padroes[padrao]" :onPadraoSelecionado="onPadraoClicked"/>
            </div>
          </div>
        </div>
      </Collapse>
      <!-- </div> -->
    </div>
  </div>
</template>
