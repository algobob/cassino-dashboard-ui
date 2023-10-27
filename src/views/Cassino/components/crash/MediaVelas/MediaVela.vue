<script setup>
const props = defineProps(['data','vela'])
</script>
<template>
  <div class="card" style="width: fit-content; height: fit-content;" v-if="data">
    <div class="card-body">
      <h5 class="card-title">{{ vela }} ({{ data['media'] }}%)</h5>
      <p class="card-text"><mark>{{ data['media_tempo'] }}</mark></p>
    </div>
  </div>
</template>
<style>
.row>* {
  margin: 2%;
}
</style>
