<script setup>

const props = defineProps(['roll', 'probabilidade'])

</script>
<style scoped>
.circle {
  border-radius: 50%;
  width: 52px;
  height: 50px;
  padding: 10px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  font: 22px Arial, sans-serif;
}

.square {
  width: 52px;
  height: 50px;
  padding: 10px;
  border: 3px solid #000;
  text-align: center;
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
</style>

<template>
  <div style="display: flex; justify-content: center;">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <div class="circle">{{ roll }}</div>
        </h5>
        <div class="card-text">
          <div class="square" style="background-color: red;"></div>
          <p class=""><mark> {{ probabilidade.red }}%</mark></p>
          <div class="square" style="background-color: black;"></div>
          <p class="card-text mt-2"><mark> {{ probabilidade.black }}%</mark></p>
        </div>
      </div>
    </div>
  </div>
</template>
