<script setup>
import { onMounted, ref } from 'vue'
import VueTimepicker from 'vue3-timepicker/src/VueTimepicker.vue'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import { useWebNotification } from '@vueuse/core'

const audioVictory = new Audio(pokemonVictory)
const isAlarmando = ref(false)
const getHours = () => {
    const date = new Date();
    const currentHours = date.getHours();
    return ("0" + currentHours).slice(-2);
 }
const getMinutes = () => {
    const date = new Date();
    const currentMinutes = date.getMinutes();
    return ("0" + currentMinutes).slice(-2);
 }
const horario = ref(`${getHours()}:${getMinutes()}`)
const options = {
  title: 'Hora da entrada!',
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

onMounted(() => {
    setInterval(() => {
        if (isAlarmando.value) {
            const hourAndMinutesNow = `${getHours()}:${getMinutes()}` 
            if (hourAndMinutesNow === horario.value) {
                play(audioVictory, 60)
                notify()
            }
        } else {
            audioVictory.pause()
        }
    }, 1000)
})

</script>
<template>
    <div class="card">
        <div class="card-body">
            <div style="display: flex; width: 200px; height: fit-content; gap: 20px; flex-direction: column;">
                <h5>Alarme</h5>
                <div>
                    <span style="margin-right: 12px; font-size: large; width: fit-content;">Selecione horario:</span>
                    <VueTimepicker v-model="horario"></VueTimepicker>
            <button style="width: 100px; margin-top: 10px;" @click="alarmar">{{ isAlarmando ? 'Parar' : 'Alarmar' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>