<style scoped>
.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: whitesmoke;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}

.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}
</style>
<script setup>
import { ref } from "vue";

const hover = ref(false)

const props = defineProps({
  minute: String,
  data: Object,
  isMinFixo: Boolean
})

const min = parseInt(props.minute)
const now = new Date()
now.setMinutes(now.getMinutes()+min)

const nowStr = now.toLocaleTimeString('pt-BR', { hour12: false}).split(':')
</script>
<template>
  <div style="display: flex; flex-direction: column;" class="m-2" v-if="data" @mouseover="hover = true" @mouseleave="hover = false">
    <span class="tooltiptext" v-if="hover">{{ data['hit'] }}/{{ data['tried'] }}</span>

      <div style="display: flex;">
      <div class="rectangle">{{ minute }}</div>
      <h4> > {{ data['probabilidade'] }} </h4>
    </div>
      <span v-if="!isMinFixo" class="mb-2"> (Prox: {{ nowStr[0] }}:{{ nowStr[1] }})
  </span>
    </div>
</template>
