<style scoped>
.black-circle {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  font: 22px Arial, sans-serif;
  margin: 0 2px;

}

.red-circle {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: #fff;
  border: 3px solid red;
  color: red;
  text-align: center;
  font: 22px Arial, sans-serif;
  margin: 0 2px;

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

.quadradinhoPreto {
  width: 54px;
  height: 44px;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: black;
  margin: 4px 4px 0 4px;
  transition: 0.3s;  
}

.quadradinho span {
  font-weight: 600;
  color: black;
  line-break: anywhere;
  font-size: 13px;
  text-align: center;

}

.quadradinhoPreto span {
  font-weight: 600;
  color: white;
  line-break: anywhere;
  font-size: 13px;
  text-align: center;
}

.quadradinho:hover {
  border: 2px solid blue;
  transition: 0.3s;
}

.quadradinhoPreto:hover {
  border: 2px solid red;
  transition: 0.3s;
}
</style>
<script setup>
import { ref } from "vue";
import whiteRoll from "@/assets/img/white-roll.png";

const props = defineProps({
  roll: Object
})

const upHere = ref(false)

</script>
<template>
  <div style="display: flex;  gap: 20px; margin-bottom: 6px;">
      <!-- <div class="red-circle"> {{ roll?.roll }}</div> -->
      <div v-if="roll?.color !== 'white'" :class="{
        'red-circle': roll?.color === 'red',
        'black-circle': roll?.color === 'black'}"
        @mouseover="upHere = true" @mouseleave="upHere = false">
        <span>
          {{ roll?.roll }}
        </span>
      </div>
      <img v-if="roll?.color === 'white'" class="white-roll" :src="whiteRoll" alt="White">
      <!-- <img class="black-circle" :src="whiteRoll" alt="White"> -->

        <!-- <span v-show="upHere">{{ new Date(roll?.created*1000).toLocaleTimeString() }}</span> -->
  </div>
</template>
