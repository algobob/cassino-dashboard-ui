<style scoped>
.red-circle {
  height: 40px;
  width: 40px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}

.black-circle {
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}

.white-circle {
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  border-color: black;
  border-style: solid;
  display: inline-block;
  margin-right: 5px;
}

.gray-circle {
  height: 40px;
  width: 40px;
  background-color: gray;
  border-radius: 50%;
  border-color: black;
  border-style: solid;
  display: inline-block;
  margin-right: 5px;
}

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

console.log('prob ', props.data)
</script>
<template>
  <div v-if="data" style="cursor: pointer;">
    <div style="display: flex; align-items: center; position: relative;" v-if="data['red']" @mouseover="hoverRed = true"
    @mouseleave="hoverRed = false" >
    <span class="tooltiptext" v-if="hoverRed">{{ data['red']['hit'] }}/{{ data['red']['tried'] }}</span>
      <PadraoCorTarget :padrao="padrao" target="red" @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['red']['probabilidade'] }}%</mark></h5>
    </div>
    
    <div style="display: flex; align-items: center; position: relative;" v-if="data['black']"
    @mouseover="hoverBlack = true" @mouseleave="hoverBlack = false"
    >
    <span class="tooltiptext" v-if="hoverBlack">{{ data['black']['hit'] }}/{{ data['black']['tried'] }}</span>
      <PadraoCorTarget :padrao="padrao" target="black"  @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['black']['probabilidade'] }}%</mark></h5>
    </div>
    
    <div style="display: flex; align-items: center; position: relative;" v-if="data['white']"
    @mouseover="hoverWhite = true" @mouseleave="hoverWhite = false"
    >
    <span class="tooltiptext" v-if="hoverWhite">{{ data['white']['hit'] }}/{{ data['white']['tried'] }}</span>
      <PadraoCorTarget :padrao="padrao" target="white" @clicked="onPadraoSelecionado" />
      <h5 class="font-weight-bold p-2"> ? </h5>
      <h5 class="font-weight-bold p-2"><mark>{{ data['white']['probabilidade'] }}%</mark></h5>
    </div>
  </div>
</template>
