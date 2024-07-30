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
import Roll from "@/components/Roll.vue";

const props = defineProps({
  roll: Object
})

// const rollTime = new Date(props.roll.created*1000)
const rollTime = new Date(props.roll.created*1000).toLocaleString('pt-BR')
const created = props.roll?.created
console.log('creu ', props.roll.created)

</script>
<template>
  <div style="display: flex; flex-direction: column; margin-bottom: 6px; text-align: center; align-content: center;">
      <Roll :color="roll?.color" :roll="roll?.roll"  />
      <span class="hora">{{ created.getHours() < 10 ? '0'+created.getHours() : created.getHours() }}:{{ created.getMinutes() }}</span>
      <!-- <span class="hora">{{ created.getDate() }}/{{ created.getMonth() }}</span> -->
  </div>
</template>
