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
import { Collapse } from 'vue-collapsed'
import { ref } from 'vue'

const isExpanded = ref(true)
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
    <h4 style="text-decoration: underline;" @click="isExpanded = !isExpanded">Minutagem</h4>
    <Collapse :when="isExpanded">
      <div class="row">
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
    </Collapse>
  </div>
</template>
