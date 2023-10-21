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
  padrao: String,
  data: Object
})

</script>
<template>
  <div style="display: flex; align-items: center; position: relative;" v-if="Object.keys(data['red']).length">
    <span class="tooltiptext" v-if="hover">{{ data['red']['hit'] }}/{{ data['red']['tried'] }}</span>
    <div v-for="p in padrao" @mouseover="hover = true" @mouseleave="hover = false"
    :class="{ 'red-circle': p === 'r', 'black-circle': p === 'b', 'white-circle': p === 'w' }"></div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div class="red-circle"></div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>{{ data['red']['probabilidade'] }}%</mark></h5>
  </div>
  <div style="display: flex; align-items: center; position: relative;" v-if="Object.keys(data['black']).length">
    <span class="tooltiptext" v-if="hover">{{ data['black']['hit'] }}/{{ data['black']['tried'] }}</span>
    <div v-for="p in padrao" @mouseover="hover = true" @mouseleave="hover = false"
    :class="{ 'red-circle': p === 'r', 'black-circle': p === 'b', 'white-circle': p === 'w' }"></div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div class="black-circle"></div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>{{ data['black']['probabilidade'] }}%</mark></h5>
  </div>
</template>
