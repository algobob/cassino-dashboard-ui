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
</style>

<script setup>
const props = defineProps({
  qtd: Number,
  color: Text,
  targetColor: Text,
  probability: Text
})

console.log(props.probability)
</script>
<template>
  <div style="display: flex; align-items: center;">
    <div v-for="n in qtd" :class="{ 'red-circle': props.color === 'red', 'black-circle': props.color === 'black'}"></div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div :class="{ 'red-circle': targetColor === 'red', 'black-circle': targetColor === 'black'}"></div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>{{ probability }}</mark></h5>
  </div>
</template>
