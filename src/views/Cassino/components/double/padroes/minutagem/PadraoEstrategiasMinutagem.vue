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
  <div class="container" style="margin-bottom: 40px; margin-top: 40px;">
    <div class="row">
      <div class="col">
        <h4 style="text-decoration: underline;">Minutagem</h4>
        <h5 style="text-decoration: underline;margin-top: 40px;">Minuto fixo</h5>
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.fixos.red" color="red" />
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.fixos?.black" color="black" />
      </div>
      <div class="col">
        <h5 style="text-decoration: underline; margin-top: 80px;">Intervalo de X min</h5>
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.intervalos?.red" color="red" />
        <MinutosProbabilidades :probabilidades="estrategias?.minutagem?.intervalos?.black" color="black" />
      </div>
    </div>
  </div>
</template>
