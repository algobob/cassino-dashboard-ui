<style scoped>
.rectangle {
  width: 70px;
  height: 40px;
  padding: 6px;
  background: greenyellow;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}
</style>

<script setup>
const props = defineProps({
  vela: String,
  probabilidade: String,
  minuto: String,
  isMinutoFixo: Boolean
})

const proxEntrada = new Date()
proxEntrada.setMinutes(props.isMinutoFixo ? parseInt(props.minuto)+10 : proxEntrada.getMinutes()+parseInt(props.minuto))
console.log('proxEntrada ', proxEntrada)

const proxEntradaStr = proxEntrada.toLocaleTimeString('pt-BR',{ hour: "2-digit", minute: "2-digit" }).split(':')
console.log('proxEntradaStr ', proxEntradaStr)

</script>
<template>
  <div style="display: flex; flex-direction: column; " class="mb-2">
    <div style="display: flex; align-items: center; gap: 5px;">
      <div class="rectangle">{{ minuto }}</div>
      <h4> > {{ probabilidade }} </h4>
    </div>
    <span class="mb-2"> (Prox: {{ proxEntradaStr[0] }}:{{ proxEntradaStr[1] }}) </span>
  </div>
</template>
