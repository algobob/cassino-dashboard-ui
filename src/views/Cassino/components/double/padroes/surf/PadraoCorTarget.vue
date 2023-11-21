<style scoped>
.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 80%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}
</style>

<script setup>
import { ref } from "vue";
import PadraoCor from "./PadraoCor.vue";
import Roll from "../../Roll.vue";

const hover = ref(false)

const props = defineProps({
  padrao: String,
  target: String
})

</script>
<template>
  <div v-if="padrao" style='cursor: pointer;' @click="$emit('clicked', padrao, target)">
    <div style="display: flex; align-items: center; position: relative;">
      <PadraoCor v-for="p in padrao" :padrao="p" @mouseover="hover = true" @mouseleave="hover = false" />
      <h5 class="font-weight-bold p-2"> > </h5>
      <Roll :color="target" is-clickable='true' />
    </div>
  </div>
</template>
