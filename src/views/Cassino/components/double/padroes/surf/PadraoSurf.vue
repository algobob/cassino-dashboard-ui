<style scoped>
.red-circle {
  height: 40px;
  width: 40px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}

.black-circle {
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

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

const hover = ref(false)

const props = defineProps({
  qtd: Number,
  color: String,
  targetColor: String,
  data: Object
})

</script>
<template>
  <div style="display: flex; align-items: center; position: relative;">
    <span class="tooltiptext" v-if="hover">{{ data['hit'] }}/{{ data['tried'] }}</span>
    <div v-for="n in qtd" @mouseover="hover = true" @mouseleave="hover = false"
    :class="{ 'red-circle': props.color === 'red', 'black-circle': props.color === 'black' }"></div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div :class="{ 'red-circle': targetColor === 'red', 'black-circle': targetColor === 'black' }"></div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>{{ data['probabilidade'] }}%</mark></h5>
  </div>
</template>
