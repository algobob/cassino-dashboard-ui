<script setup>
import Roll from "../../Roll.vue";
import { ref, watch } from 'vue';
import pokemonBattle from '@/assets/audio/pokemon-battle.mp3'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import marioDeath from '@/assets/audio/mario-death.mp3'
import { useWebNotification } from '@vueuse/core'
import PadraoCorTarget from "../surf/PadraoCorTarget.vue";


const options = {
  title: 'Opa, padrao encontrado!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test'
}

const {
  isSupported,
  show,
} = useWebNotification(options)

const props = defineProps({
  rolls: Array,
  padroesSelecionados: {
    type: Array,
    default: []
  }
})

const padrao = ref([])
const audioBattle = new Audio(pokemonBattle)
const audioVictory = new Audio(pokemonVictory)

const play = (audio, seconds) => {
  audio.currentTime = 0
  audio.play();
  setTimeout(() => { audio.pause(); }, seconds * 1000);
}

const onClickColor = (color) => {
  padrao.value.push(color)
  console.log('padrao = ', padrao.value)
}

const adicionar = () => {
  props.padroesSelecionados.push(padrao.value)
  padrao.value = []
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

watch(() => props.rolls, async (newRolls, oldRolls) => {
  if (props.padroesSelecionados.length && JSON.stringify(newRolls[0]) !== JSON.stringify(oldRolls[0])) {
    console.log('props.padroesSelecionados ', props.padroesSelecionados)
    props.padroesSelecionados.forEach(p => {
      if (p.length) {
        const padrao = p[0].split(',').map( c => c === 'r' ? 'red' : c === 'b' ? 'black' : 'white').slice(0,-1)
        console.log('padrao ', padrao)
        
        const target = p[1]
        const lastRolls = newRolls.slice(0, padrao.length).map( roll => roll.color).reverse()

        console.log('lastRolls ', lastRolls)

        const allMatch = lastRolls.every((color, index) => color === padrao[index]);
        console.log('allMatch ', allMatch)

        if (allMatch) {
          callAttention()
          return;
        }
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
            style="display: flex; flex-direction: column; width: 500px; height: 400px; border: groove; border-radius: 10px;">
            <div v-for="(padraoTarget, index) in padroesSelecionados"
              style="display: flex; flex-direction: row; gap: 5px; margin-left: 2px; align-items: center;">
              <PadraoCorTarget :padrao="padraoTarget[0]" :target="padraoTarget[1]" :blink="true"
                @click="padroesSelecionados[index] = []" />
              <!-- <span class="loader" style="margin-left: 30px;" v-if="padroesSelecionados[index].length"></span> -->
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column;">
          <h5>Novo padrao:</h5>
          <div
            style="display: flex; gap: 5px; align-items: center; width: 500px; height: 70px; border: groove; border-radius: 10px; margin-top: 5px; margin-bottom: 10px;">
            <Roll v-for="color in padrao" :color="color" />
          </div>
          <div style="display: flex; gap: 5px;">
            <button style="width: 100px; margin-bottom: 30px;" @click="adicionar">Adicionar</button>
            <button style="width: 100px; margin-bottom: 30px;" @click="padrao = []">Limpar</button>
          </div>
          <h5>Por cores:</h5>
          <div style="display: flex; gap: 5px;">
            <Roll color="red" @clicked="onClickColor" is-clickable="true" />
            <Roll color="black" @clicked="onClickColor" is-clickable="true" />
            <Roll color="white" @clicked="onClickColor" is-clickable="true" />
          </div>
          <div style="display: flex;flex-direction: column;">
            <h5>Por numeros:</h5>
            <div style="display: flex; gap: 5px; flex-direction: column;">
              <div style="display: flex; gap: 5px;">
                <Roll color="red" roll="1" />
                <Roll color="red" roll="2" />
                <Roll color="red" roll="3" />
                <Roll color="red" roll="4" />
                <Roll color="red" roll="5" />
                <Roll color="red" roll="6" />
                <Roll color="red" roll="7" />
              </div>
              <div style="display: flex; gap: 5px;">
                <Roll color="black" roll=8 />
                <Roll color="black" roll=9 />
                <Roll color="black" roll=10 />
                <Roll color="black" roll=11 />
                <Roll color="black" roll=12 />
                <Roll color="black" roll=13 />
                <Roll color="black" roll=14 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
