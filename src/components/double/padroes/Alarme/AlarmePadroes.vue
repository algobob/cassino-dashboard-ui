<script setup>
import { ref, watch } from 'vue';
import PadraoCor from "../cores/PadraoCor.vue";
import { callAttention, stopCallAttention } from "@/assets/js/callAttention.js"
import FiltroPadroes from "@/components/FiltroPadroes.vue";

const padraoEncontradoIndex = ref(-1)
const padroesRefs = ref([])
const padroes = ref([])

const props = defineProps({
  rolls: Array,
  padroesSelecionados: Array,
  platform: String,
  limparPadroesSelecionados: Function
})

const padrao = ref([])

const adicionar = (padrao) => {
    padroes.value.push(padrao.value)
    padrao.value = []
}

const patternsEquals = (pattern1, pattern2) => {
  return pattern1.every((roll, index) => roll.roll && pattern2[index].roll? roll.roll === pattern2[index].roll : roll.color === pattern2[index].color);  
}

const checkRollColor = (padraoIndex, padrao, newRolls) => {  
  const lastRolls = newRolls.slice(0, padrao.length).reverse()
  const allMatch = patternsEquals(padrao, lastRolls)

  if (allMatch) {
    padraoEncontradoIndex.value = padraoIndex
    padroesRefs.value[padraoIndex].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    callAttention(5)
    return;
  }
}

watch(() => props.rolls, async (newRolls, oldRolls) => {
  if (props.padroesSelecionados.length && JSON.stringify(newRolls[0]) !== JSON.stringify(oldRolls[0])) {
    padraoEncontradoIndex.value = -1
    props.padroesSelecionados.forEach((padrao, index) => {
      if (padrao.length) {
          checkRollColor(index, padrao, newRolls)
      }
    })
  }
})

</script>
<style scoped>
.square {
  height: 50px;
  width: 50px;
  border-style: solid;
  border-color: black;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.red {
  background-color: red;
}

.loader {
  width: 38px;
  height: 38px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="card" style="width: fit-content; margin: 0 10px;">
    <div class="card-header">
      <h4 class="card-title">Alarme - Padrão</h4>
    </div>
    <div class="card-body">
      <div style="display: flex; gap: 25px;">
        <div style="display: flex; flex-direction: column;">
          <h5>Padroes:</h5>
          <div
            style="display: flex; flex-direction: column; width: 500px; height: 400px; border: groove; border-radius: 10px; max-height: 400px; overflow-y: auto;">
            <div v-for="(padrao, index) in padroesSelecionados" ref="padroesRefs"
              style="display: flex; flex-direction: row; gap: 5px; margin-left: 2px; align-items: center;">
              <PadraoCor :padrao="padrao" :blink="index === padraoEncontradoIndex" @click="padroesSelecionados[index] = []" />
            </div>
          </div>
          <div>
            <button style="width: 100px; margin-bottom: 10px;margin-top: 10px;" @click="limparPadroesSelecionados">Limpar</button>
          </div>
        </div>
        <FiltroPadroes actionButtonName="Adicionar" :onClickAction="adicionar"/>
      </div>
    </div>
  </div>
</template>
