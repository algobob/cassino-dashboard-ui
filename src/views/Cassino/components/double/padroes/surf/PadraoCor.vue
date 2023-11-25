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
import Roll from "../../Roll.vue";

const hover = ref(false)

const props = defineProps({
  padrao: String,
  blink: Boolean
})

</script>
<template>
  <div v-if="padrao" style='cursor: pointer;'>
  <div style="display: flex; align-items: center; position: relative; gap: 10px;">
    <Roll v-for="p in padrao" :color="p" @mouseover="hover = true" @mouseleave="hover = false" :is-clickable="true" :blink="blink"/>
  </div>
</div>
</template>
