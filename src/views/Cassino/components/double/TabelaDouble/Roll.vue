<style scoped>
.black-circle {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: black;
  border: 3px solid #000;
  color: white;
  text-align: center;
  font: 22px Arial, sans-serif;
}

.red-circle {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: red;
  border: 3px solid red;
  color: white;
  text-align: center;
  font: 22px Arial, sans-serif;
}

.white-roll {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: #fff;
  border: 1px solid black;
  color: white;
  text-align: center;
  margin: 0 2px;
}
</style>
<script setup>
import whiteRoll from "@/assets/img/white-roll.png";

const props = defineProps({
  roll: Object
})

const rollTime = new Date(props.roll.created*1000).toLocaleTimeString('pt-BR').split(':')

</script>
<template>
  <div style="display: flex; flex-direction: column; margin-bottom: 6px; text-align: center; align-content: center;">
      <div v-if="roll?.color !== 'white'" :class="{
        'red-circle': roll?.color === 'red',
        'black-circle': roll?.color === 'black'}">
        <span>
          {{ roll?.roll }}
        </span>
      </div>
      <img v-if="roll?.color === 'white'" class="white-roll" :src="whiteRoll" alt="White">
      <span class="hora">{{ rollTime[0] }}:{{ rollTime[1] }}</span>
  </div>
</template>
