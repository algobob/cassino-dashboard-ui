<style scoped></style>
<script setup>
import Roll from "./Roll.vue"

const props = defineProps({
  rolls: Array
})

console.log('rolls ', props.rolls)
</script>
<template>
  <div class="card" style="width: auto; margin: 0 10px;">
    <div class="card-header">
      <h4 class="card-title">Tabela</h4>
    </div>
    <div class="card-body">
      <div style="display: flex; flex-wrap: wrap; margin-top: 15px; flex-direction: row-reverse;">
        <div v-for="roll in rolls">
          <Roll :roll="roll" />
        </div>
      </div>
    </div>
  </div>
</template>
