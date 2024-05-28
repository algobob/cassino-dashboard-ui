<style scoped></style>
<script setup>
import TabelaRoll from "./TabelaRoll.vue"

const props = defineProps({
  rolls: Array
})

console.log('rolls ', props.rolls)
</script>
<template>
  <div style="margin-top: 60px; margin-bottom: 60px;">
    <div >
      <h5>Tabela de rodadas</h5>
    </div>
    <div style="margin-top: 60px;">
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 15px; flex-direction: row-reverse;">
        <div v-for="roll in rolls">
          <TabelaRoll :roll="roll" />
        </div>
      </div>
    </div>
  </div>
</template>
