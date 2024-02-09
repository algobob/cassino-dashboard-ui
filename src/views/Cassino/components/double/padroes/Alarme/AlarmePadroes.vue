<script setup>
import Roll from "../../Roll.vue";
import { ref, watch } from 'vue';
import pokemonBattle from '@/assets/audio/pokemon-battle.mp3'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import marioDeath from '@/assets/audio/mario-death.mp3'
import { useWebNotification } from '@vueuse/core'
import PadraoCor from "../surf/PadraoCor.vue";

const padraoEncontradoIndex = ref(-1)
const padroesRefs = ref([])

const props = defineProps({
  rolls: Array,
  padroesSelecionados: Array,
  platform: String,
  limparPadroesSelecionados: Function
})

const options = {
  title: `Djabet | ${props.platform} | Double`,
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test'
}

const {
  isSupported,
  onClick,
  show,
} = useWebNotification(options)

onClick(event => {
  window.focus()
})

const padrao = ref([])
const audioBattle = new Audio(pokemonBattle)
const audioVictory = new Audio(pokemonVictory)

const play = (audio, seconds) => {
  audio.currentTime = 0
  audio.play();
  setTimeout(() => { audio.pause(); }, seconds * 1000);
}

const onClickRoll = (roll) => {
  console.log('onClickRoll ', roll)
  padrao.value.push(roll)
}

const adicionar = () => {
  if (!props.padroesSelecionados.includes(padrao.value)) {
    props.padroesSelecionados.push(padrao.value)
    padrao.value = []
  }  
}

const notify = () => {
  if (isSupported.value)
    show()
  else
    console.log('nao suporta notification api')
}

const callAttention = () => {
  notify()
  play(audioBattle, 5)
}

const patternsEquals = (pattern1, pattern2) => {
  console.log('pattern1 ', pattern1)  
  console.log('pattern2 ', pattern2)  
  return pattern1.every((roll, index) => roll.roll && pattern2[index].roll? roll.roll === pattern2[index].roll : roll.color === pattern2[index].color);  
}

const checkRollColor = (padraoIndex, padrao, newRolls) => {  
  const lastRolls = newRolls.slice(0, padrao.length).reverse()
  const allMatch = patternsEquals(padrao, lastRolls)

  if (allMatch) {
    padraoEncontradoIndex.value = padraoIndex
    padroesRefs.value[padraoIndex].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    callAttention()
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
        <div style="display: flex; flex-direction: column;">
          <h5>Novo padrao:</h5>
          <div
            style="display: flex; gap: 5px; align-items: center; width: 500px; height: 70px; border: groove; border-radius: 10px; margin-top: 5px; margin-bottom: 10px;">
            <Roll v-for="item in padrao" :color="item?.color" :roll="item?.roll" />
          </div>
          <div style="display: flex; gap: 5px;">
            <button style="width: 100px; margin-bottom: 30px;" @click="adicionar">Adicionar</button>
            <button style="width: 100px; margin-bottom: 30px;" @click="padrao = []">Limpar</button>
          </div>
          <h5>Por cores:</h5>
          <div style="display: flex; gap: 5px;">
            <Roll color="red" @clicked="onClickRoll" :is-clickable=true />
            <Roll color="black" @clicked="onClickRoll" :is-clickable=true />
            <Roll color="white" @clicked="onClickRoll" :is-clickable=true />
          </div>
          <div style="display: flex;flex-direction: column;">
            <h5>Por numeros:</h5>
            <div style="display: flex; gap: 5px; flex-direction: column;">
              <div style="display: flex; gap: 5px;">
                <Roll :roll=1 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=2 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=3 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=4 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=5 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=6 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=7 @clicked="onClickRoll" :is-clickable=true />
              </div>
              <div style="display: flex; gap: 5px;">
                <Roll :roll=8 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=9 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=10 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=11 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=12 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=13 @clicked="onClickRoll" :is-clickable=true />
                <Roll :roll=14 @clicked="onClickRoll" :is-clickable=true />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
