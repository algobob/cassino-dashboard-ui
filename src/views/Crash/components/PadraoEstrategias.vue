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
</style>

<script setup>
const props = defineProps(['estrategias'])
</script>
<template>
  <div class="card" style="width: 35%;">
    <div class="card-header">
      <h5 class="card-title">Estrategias - Probabilidades</h5>
    </div>
    <div class="card-body">
      <div style="display: flex; align-items: center;" class="mb-2">
        <div class="numberCircle">5X</div>
        <h4 class="m-2">+ 5 min ====> {{ props.estrategias['5x5min'] }}</h4>
      </div>
      <div style="display: flex; align-items: center;" class="mb-2">
        <div class="numberCircle">10X</div>
        <h4 class="m-2">+ 5 min ====> {{ props.estrategias['10x5min'] }}</h4>
      </div>
    </div>
  </div>
</template>
