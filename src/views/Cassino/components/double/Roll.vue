<style scoped>
.circle {
  border-radius: 50%;
  width: 3.2rem;
  height: 3.1rem;
  padding: 10px;
  text-align: center;
  font: 22px Arial, sans-serif;
  margin: 0 2px;
}

.red-roll {
  background: red;
  border: 3px solid red;
  color: white;
}

.black-roll {
  background: black;
  border: 3px solid black;
  color: white;
}

.white-roll {
  background: #fff;
  border: 1px solid black;
  color: white;
}

.any-roll {
  background: gray;
  border: 1px solid gray;
  color: gray;
}
</style>
<script setup>
import whiteRoll from "@/assets/img/white-roll.png";

const props = defineProps({
  color: String,
  roll: Number,
  isClickable: Boolean,
  blink: Boolean
})

const NUMBERS_COLORS = {
  '0': 'white',
  '1': 'red',
  '2': 'red',
  '3': 'red',
  '4': 'red',
  '5': 'red',
  '6': 'red',
  '7': 'red',
  '8': 'black',
  '9': 'black',
  '10': 'black',
  '11': 'black',
  '12': 'black',
  '13': 'black',
  '14': 'black'
}

const rollClicked = {
  color: props.color? props.color : props.roll? NUMBERS_COLORS[props.roll.toString()] : "",
  roll: props.roll
}

</script>
<template>
  <div v-if="color || roll"
    style="display: flex; flex-direction: column; margin: 2px; text-align: center; align-content: center;"
    @click="$emit('clicked', rollClicked)" :style="{ 'cursor': isClickable ? 'pointer' : 'auto' }" :class="{
      'blink': blink
    }">
      <div v-if="color?.includes('r') || [1,2,3,4,5,6,7].includes(roll)" class="circle red-roll"><span>{{ roll }}</span></div>
      <div v-if="color?.includes('b') || [8,9,10,11,12,13,14].includes(roll)" class="circle black-roll"><span>{{ roll }}</span></div>
      <div v-if="color === '*'" class="circle any-roll"><span>{{ roll }}</span></div>
      <img v-if="color?.includes('w') || roll === 0" class="circle white-roll" :src="whiteRoll" alt="White">
  </div>
</template>
