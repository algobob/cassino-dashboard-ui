<script setup>
import { onMounted, ref, watch } from 'vue'
import VueTimepicker from 'vue3-timepicker/src/VueTimepicker.vue'
import { callAttention, stopCallAttention } from '@/assets/js/callAttention.js'

const isAlarmando = ref(false)
const isCallingAttention = ref(false)
const currentTime = ref(0)

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

const alarmar = () => {
    isAlarmando.value = !isAlarmando.value 
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

watch(() => currentTime.value, async (newValue, oldValue) => {
        if (isAlarmando.value) {
          const timePickerTime = horario.value.split(":")
          console.log(timePickerTime)
          console.log(newValue.getHours())
          console.log(newValue.getMinutes())
         if (parseInt(timePickerTime[0]) === newValue.getHours() && parseInt(timePickerTime[1]) === newValue.getMinutes()) {
          if (!isCallingAttention.value) {
          callAttention()
          isCallingAttention.value = true
          }
         }
        } else {
          isCallingAttention.value = false
          stopCallAttention()
        }
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