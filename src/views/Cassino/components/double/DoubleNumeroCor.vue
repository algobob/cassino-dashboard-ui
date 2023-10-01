<script setup>
import DoubleNumeroCorProbabilidade from './DoubleNumeroCorProbabilidade.vue';

const props = defineProps(['estrategias'])
</script>
<style scoped>
.circle {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        background: #fff;
        border: 3px solid #000;
        color: #000;
        text-align: center;
        font: 22px Arial, sans-serif;
      }

.black {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.red {
  color: red;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Qual probabilidade para cor <mark class="red">VERMELHA</mark> ou <mark class="black">PRETA</mark> apos numero X?</h5>
    </div>
    <div class="card-body">
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div v-for="(value, key) in estrategias?.numero_cor_probabilidades">
          <DoubleNumeroCorProbabilidade :roll="key" :probabilidade="value" />
        </div>
      </div>
    </div>
  </div>
</template>
