<script setup>
import Vela from "../Vela.vue";
import { ref, watch } from 'vue';
import { useWebNotification } from '@vueuse/core'
import pokemonBattle from '@/assets/audio/pokemon-battle.mp3'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import marioDeath from '@/assets/audio/mario-death.mp3'

const options = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
  requestPermissions: true
}

const {
  isSupported,
  show,
} = useWebNotification(options)

const props = defineProps({
  velas: Array
})

const padroes = ref([])
const padrao = ref([])
const audioBattle = new Audio(pokemonBattle)
const audioVictory = new Audio(pokemonVictory)

const play = (audio, seconds) => {
  audio.currentTime = 0
  audio.play();
  setTimeout(() => { audio.pause(); }, seconds * 1000);
}

const onClickVela = (vela) => {
  padrao.value.push(vela)
}

const adicionar = () => {
  padroes.value.push(padrao.value)
  padrao.value = []
}

const notify = () => {
  if (isSupported.value)
    show()
  else
    console.log('nao suporta notification api')
}

watch(() => props.velas, async (newVelas, oldVelas) => {
  if (padroes.value.length && JSON.stringify(newVelas[0]) !== JSON.stringify(oldVelas[0])) {
    padroes.value.forEach(p => {
      if (p.length) {
      const lastVelas = newVelas.slice(0,p.length)
      let qtdMatch = 0
      for (let i = 0; i < p.length; i++) {
        if (lastVelas[i].vela < 2 && p[i] < 2 || lastVelas[i].vela >= 2 && p[i] >= 2) {
          qtdMatch += 1;
        }
      }
      if (qtdMatch === p.length) {
        notify()
        play(audioBattle, 5)
        return;
      }
    }
    })
  }
})

</script>
<style scoped>

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
            <div v-for="(padrao, index) in padroes"
              style="display: flex; flex-direction: row; gap: 5px; margin-left: 2px; align-items: center;">
              <Vela v-for="vela in padrao" :vela="vela" />
              <span class="loader" style="margin-left: 30px;" v-if="padroes[index].length"></span>
              <button style="width: 40px; margin-left: 10px;" v-if="padroes[index].length"
                @click="padroes[index] = []">X</button>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column;">
          <h5>Novo padrao:</h5>
          <div
            style="display: flex; gap: 5px; align-items: center; width: 500px; height: 70px; border: groove; border-radius: 10px; margin-top: 5px; margin-bottom: 10px;">
            <Vela v-for="vela in padrao" :vela="vela" />
          </div>
          <div style="display: flex; gap: 5px;">
            <button style="width: 100px; margin-bottom: 30px;" @click="adicionar">Adicionar</button>
            <button style="width: 100px; margin-bottom: 30px;" @click="padrao = []">Limpar</button>
          </div>
          <h5>Por cores:</h5>
          <div style="display: flex; gap: 5px;">
            <Vela :vela="2" @clicked="onClickVela" />
            <Vela :vela="1.99" @clicked="onClickVela" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
