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
import '@/assets/css/cassino.css'

const hover = ref(false)

const props = defineProps({
  padrao: Array,
  blink: Boolean
})

</script>
<template>
  <div v-if="padrao" style='cursor: pointer;'>
  <div style="display: flex; align-items: center; position: relative; gap: 5px;" :class="{
    'blink': blink
  }">
    <Roll v-for="roll in padrao" :color="roll?.color" :roll="roll?.roll" @mouseover="hover = true" @mouseleave="hover = false" :is-clickable="true" />
  </div>
</div>
</template>
