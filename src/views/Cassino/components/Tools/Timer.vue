<script setup>
import { onMounted, ref, watch } from 'vue'
import VueTimepicker from 'vue3-timepicker/src/VueTimepicker.vue'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import { useWebNotification } from '@vueuse/core'

const audioVictory = new Audio(pokemonVictory)
const isAlarmando = ref(false)
const minutos = ref(1)
const options = {
  title: 'Hora da entrada!',
  dir: 'auto',
  lang: 'en',
  renotify: false,
  tag: 'test'
}

const {
  isSupported,
  onClick,
  show,
} = useWebNotification(options)

const play = (audio, seconds) => {
  if (audio.paused) {
    audio.currentTime = 0
    audio.play();
  setTimeout(() => { audio.pause(); }, seconds * 1000);
  }
}

const notify = () => {
  if (isSupported.value){
    show()
  }
  else {
    console.log('nao suporta notification api')
  }
}


const alarmar = () => {
    isAlarmando.value = !isAlarmando.value 
}

watch(
  () => isAlarmando.value,
  (value) => {
    if (value) {
      setTimeout(() => {
        play(audioVictory, 60);
        notify();
      }, minutos.value * 60 * 1000)
    } else {
      audioVictory.pause()
    }
  })

// onMounted(() => {
//     setInterval(() => {
//         if (isAlarmando.value) {
//                 play(audioVictory, 60)
//                 notify()
//         } else {
//             audioVictory.pause()
//         }
//     }, 1000)
// })

</script>
<template>
    <div class="card">
        <div class="card-body">
            <div style="display: flex; width: 200px; height: fit-content; gap: 20px; flex-direction: column;">
                <h5>Cronometro</h5>
                <div>
                    <span style="margin-right: 12px; font-size: large; width: fit-content;">Minutos:</span>
                    <input name="minutos" label="Minutos" type="number" v-model="minutos"
                        style="width: 60px;" />
            <button style="width: 100px; margin-top: 10px;" @click="alarmar">{{ isAlarmando ? 'Parar' : 'Alarmar' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>