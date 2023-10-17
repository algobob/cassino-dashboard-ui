<style scoped>
.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: greenyellow;
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
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}

</style>

<script setup>
import { ref } from "vue";

const hover = ref(false)

const props = defineProps({
  vela: String,
  data: Object,
  minuto: String,
})

const proxEntrada = new Date()
proxEntrada.setMinutes(proxEntrada.getMinutes() + parseInt(props.minuto))
const proxEntradaStr = proxEntrada.toLocaleTimeString('pt-BR',{ hour: "2-digit", minute: "2-digit" }).split(':')

</script>
<template>
  <div style="display: flex; flex-direction: column; position: relative; " class="mb-2" 
  v-if="data" @mouseover="hover = true" @mouseleave="hover = false" >
  <span class="tooltiptext" v-if="hover">{{ data['hit'] }}/{{ data['tried'] }}</span>
    <div style="display: flex; align-items: center; gap: 5px;">
      <div class="rectangle">{{ vela }}</div>
      <h4>+ {{ minuto }} min > {{ data['probabilidade'] }}% </h4>
    </div>
    <span class="mb-2"> (Prox: {{ proxEntradaStr[0] }}:{{ proxEntradaStr[1] }}) </span>
  </div>
</template>
