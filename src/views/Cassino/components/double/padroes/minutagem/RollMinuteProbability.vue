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

</style>
<script setup>

const props = defineProps({
  minute: String,
  probabilidade: String,
  isMinFixo: Boolean
})

const min = parseInt(props.minute)
const now = new Date()
now.setMinutes(now.getMinutes()+min)

const nowStr = now.toLocaleTimeString('pt-BR', { hour12: false}).split(':')
</script>
<template>
    <div style="display: flex; flex-direction: column;" class="m-2">
      <div style="display: flex;">
      <div class="rectangle">{{ minute }}</div>
      <h4> > {{ probabilidade }} </h4>
    </div>
      <span v-if="!isMinFixo" class="mb-2"> (Prox: {{ nowStr[0] }}:{{ nowStr[1] }})
  </span>
    </div>
</template>
