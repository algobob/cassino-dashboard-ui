<script setup>
const props = defineProps({
  data: Object,
  onPadraoClicked: Function
})

import { Collapse } from 'vue-collapsed'
import { ref } from 'vue'

const isExpanded = ref(true)

console.log(props.estrategias)
import PadraoCorTargetProbabilidade from "./PadraoCorTargetProbabilidade.vue"

</script>
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;" v-if="data">
    <div>
      <h4 @click="isExpanded = !isExpanded">* Padroes</h4>
      <!-- <div class="card"> -->
        <Collapse :when="isExpanded">
        <div class="card-body">
          <div style="display: flex; gap: 60px;">
            <div style="display: flex; flex-direction: column;">
              <PadraoCorTargetProbabilidade padrao="w" :data="data['w']" :onPadraoSelecionado="onPadraoClicked"/>
              <PadraoCorTargetProbabilidade padrao="w,*,*" :data="data['w,*,*']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,*,*,*" :data="data['w,*,*,*']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,*,*,*,*" :data="data['w,*,*,*,*']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,w" :data="data['w,w']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,r" :data="data['w,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,b" :data="data['w,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,r,r" :data="data['w,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="w,b,b" :data="data['w,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,w,b" :data="data['r,w,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,w,r" :data="data['b,w,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,w" :data="data['b,b,w']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,w" :data="data['r,r,w']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,r,w" :data="data['b,r,w']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,b,w" :data="data['r,b,w']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,r" :data="data['r,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,b,r" :data="data['r,b,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r" :data="data['r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b" :data="data['b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,b" :data="data['b,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,r,r" :data="data['r,r,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,b,b" :data="data['b,b,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,r,r,r" :data="data['r,r,r,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,b,b,b" :data="data['b,b,b,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,r,r,r,r" :data="data['r,r,r,r,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,b,b,b,b" :data="data['b,b,b,b,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,r,b,r" :data="data['b,r,b,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,r,b,r,b" :data="data['b,r,b,r,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,b,r,b" :data="data['r,b,r,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,b,r,b,r" :data="data['r,b,r,b,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,b,r,r" :data="data['r,r,b,r,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,b,r,r,b" :data="data['r,r,b,r,r,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="r,r,b,b,r" :data="data['r,r,b,b,r']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,r,b,b" :data="data['b,b,r,b,b']" :onPadraoSelecionado="onPadraoClicked" />
              <PadraoCorTargetProbabilidade padrao="b,b,r,b,b,r" :data="data['b,b,r,b,b,r']" :onPadraoSelecionado="onPadraoClicked" />
            </div>
          </div>
        </div>
      </Collapse>
      <!-- </div> -->
    </div>
  </div>
</template>
