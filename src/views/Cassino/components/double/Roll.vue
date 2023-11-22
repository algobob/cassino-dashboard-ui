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

.blink {
  animation: blinker 3s linear infinite both;
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

@keyframes blinker {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
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

</script>
<template>
  <div style="display: flex; flex-direction: column; margin: 2px; text-align: center; align-content: center;"
    @click="$emit('clicked', color)" :style="{'cursor': isClickable? 'pointer': 'auto'}">
    <div v-if="color !== 'white'" :class="{
      'circle red-roll': color === 'red' || color === 'r',
      'circle any-roll': color === '*',
      'circle black-roll': color === 'black' || color === 'b',
      'blink': blink
    }" :style="{
  'cursor': isClickable ? 'pointer' : 'auto'
}">
      <span>
        {{ roll }}
      </span>
    </div>
    <img v-if="color === 'white' || color === 'w'" class="circle white-roll" :src="whiteRoll" alt="White" :style="{
      'cursor': isClickable ? 'pointer' : 'auto'
    }" :class="{
      'blink': blink
    }">
  </div>
</template>
