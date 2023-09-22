<style scoped>
.numberCircle {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding: 9px;

  background: greenyellow;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 18px Arial, sans-serif;
}

.rectangle {
  width: 100px;
  height: 40px;
  padding: 6px;
  background: greenyellow;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}
</style>

<script setup>
const props = defineProps({
  min: Number,
  max: Number
})

</script>
<template>
  <div style="display: flex; align-items: center;" class="mb-2">
    <div class="rectangle">({{ props.min}}-{{ props.max }})x</div>
    <div class="rectangle">({{ props.min}}-{{ props.max }})x</div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div class="numberCircle">+2X</div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>100%</mark></h5>
  </div>
</template>
