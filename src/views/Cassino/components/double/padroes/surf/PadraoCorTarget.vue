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
import Roll from "@/components/Roll.vue";
import '@/assets/css/cassino.css'

const hover = ref(false)

const props = defineProps({
  padrao: Array,
  target: String,
  blink: Boolean
})

</script>
<template>
  <div v-if="padrao" style='cursor: pointer;' @click="$emit('clicked', padrao, target)" :class="{
    'blink': blink
  }">
    <div style="display: flex; align-items: center; position: relative;">
      <PadraoCor :padrao="padrao" @mouseover="hover = true" @mouseleave="hover = false" />
      <h5 class="font-weight-bold p-2"> > </h5>
      <Roll :color="target" :is-clickable=true />
    </div>
  </div>
</template>
