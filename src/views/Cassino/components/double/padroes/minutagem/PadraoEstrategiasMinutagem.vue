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
import MinutosProbabilidades from "./MinutosProbabilidades.vue";

const props = defineProps({
  estrategias: {
    type: Object,
    default: () => { },
    required: true,
  }
})

</script>
<template>
  <div class="container" style="margin-bottom: 40px; margin-top: 40px;" v-if="estrategias">
    <div class="row">
      <h4 style="text-decoration: underline;">Minutagem</h4>
      <h5 style="text-decoration: underline;margin-top: 40px;">Minuto fixo</h5>
      <div class="col">
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.fixos?.red" color="red" isMinFixo />
      </div>
      <div class="col">
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.fixos?.black" color="black" isMinFixo />
      </div>
    </div>
    <div class="row">
      <h5 style="text-decoration: underline; margin-top: 80px;">Intervalo de X min</h5>
      <div class="col">
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.intervalos?.red" color="red" />
      </div>
      <div class="col">
<MinutosProbabilidades :probabilidades="estrategias?.minutagem?.intervalos?.black" color="black" />
</div>
    </div>
</div></template>
