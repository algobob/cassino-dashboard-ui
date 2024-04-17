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

.square {
  width: 52px;
  height: 50px;
  padding: 10px;
  border: 3px solid #000;
  text-align: center;
}

.white-roll {
  background: #fff;
  border: 1px solid black;
  color: white;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.red {
  background-color: red;
}

.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}
</style>
<script setup>
import whiteRoll from "@/assets/img/white-roll.png";
import { ref } from "vue";
import Roll from "./Roll.vue";

const hoverRed = ref(false)
const hoverBlack = ref(false)
const hoverWhite = ref(false)

const props = defineProps({
  roll: String,
  data: Object
})

</script>
<template>
  <div style="display: flex; justify-content: center;" v-if="roll" @click="$emit('clicked', { 'roll': parseInt(roll)})">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
      <img v-if="roll === '0'" class="circle white-roll" :src="whiteRoll" alt="White" width="20px" height="20px">
          <Roll :roll="parseInt(roll)"/> 
        </h5>
        <div class="card-text">
          <div v-if="data['red']">
            <span class="tooltiptext" v-if="hoverRed">{{ data['red']['hit'] }}/{{ data['red']['tried'] }}</span>
            <div class="square" style="background-color: red; position: relative" @mouseover="hoverRed = true"
              @mouseleave="hoverRed = false"></div>
            <p><mark> {{ data['red']['probabilidade'] }}%</mark></p>
          </div>
          <div v-if="data['black']">
            <span class="tooltiptext" v-if="hoverBlack">{{ data['black']['hit'] }}/{{ data['black']['tried'] }}</span>
            <div class="square" style="background-color: black; position: relative;" @mouseover="hoverBlack = true"
              @mouseleave="hoverBlack = false"></div>
            <p class="card-text mt-2"><mark> {{ data['black']['probabilidade'] }}%</mark></p>
          </div>
          <div v-if="data['white']">
            <span class="tooltiptext" v-if="hoverWhite">{{ data['white']['hit'] }}/{{ data['white']['tried'] }}</span>
            <div class="square" style="background-color: white;border-style: ridge; position: relative;" @mouseover="hoverWhite = true"
              @mouseleave="hoverWhite = false"></div>
            <p class="card-text mt-2"><mark> {{ data['white']['probabilidade'] }}%</mark></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
