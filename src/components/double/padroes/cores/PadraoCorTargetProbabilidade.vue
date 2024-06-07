<style scoped>
.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 80%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}
</style>

<script setup>
import { ref } from "vue";
import PadraoCorTarget from "./PadraoCorTarget.vue"

const hoverRed = ref(false)
const hoverBlack = ref(false)
const hoverWhite = ref(false)

const props = defineProps({
  padrao: String,
  data: Object,
  onPadraoSelecionado: Function
})

const COLORS = {
  'r': 'red',
  'b': 'black',
  'w': 'white'
}

const mappedPadrao = props.padrao.split(',').map( color => { return {'color': COLORS[color]}})
</script>
<template>
  <div v-if="Object.keys(data).length" style="cursor: pointer;">
    <div style="display: flex; align-items: center; position: relative;" v-if="data['red']" @mouseover="hoverRed = true"
    @mouseleave="hoverRed = false" >
    <span class="tooltiptext" v-if="hoverRed">{{ data['red']['hit'] }}/{{ data['red']['tried'] }}</span>
      <PadraoCorTarget :padrao="mappedPadrao" target="red" @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['red']['probabilidade'] }}% ({{ data['red']['hit'] }}/{{ data['red']['tried'] }})</mark></h5>
    </div>
    
    <div style="display: flex; align-items: center; position: relative;" v-if="data['black']"
    @mouseover="hoverBlack = true" @mouseleave="hoverBlack = false"
    >
    <span class="tooltiptext" v-if="hoverBlack">{{ data['black']['hit'] }}/{{ data['black']['tried'] }}</span>
      <PadraoCorTarget :padrao="mappedPadrao" target="black" @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['black']['probabilidade'] }}% ({{ data['black']['hit'] }}/{{ data['black']['tried'] }})</mark></h5>
    </div>
    
    <div style="display: flex; align-items: center; position: relative;" v-if="data['white']"
    @mouseover="hoverWhite = true" @mouseleave="hoverWhite = false"
    >
    <span class="tooltiptext" v-if="hoverWhite">{{ data['white']['hit'] }}/{{ data['white']['tried'] }}</span>
      <PadraoCorTarget :padrao="mappedPadrao" target="white" @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['white']['probabilidade'] }}% ({{ data['white']['hit'] }}/{{ data['white']['tried'] }})</mark></h5>
    </div>
  </div>
</template>
