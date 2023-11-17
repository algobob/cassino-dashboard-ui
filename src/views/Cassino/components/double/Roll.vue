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
  color: String,
  roll: Number
})

</script>
<template>
  <div style="display: flex; flex-direction: column; margin-bottom: 6px; text-align: center; align-content: center;">
      <div v-if="color !== 'white'" :class="{
        'red-circle': color === 'red',
        'black-circle': color === 'black'}">
        <span>
          {{ roll }}
        </span>
      </div>
      <img v-if="color === 'white'" class="white-roll" :src="whiteRoll" alt="White">
  </div>
</template>
