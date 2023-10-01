<style scoped>
.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: greenyellow;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 13px Arial, sans-serif;
}
</style>

<script setup>
const props = defineProps({
  qtd: Number,
  probability: Text
})

</script>
<template>
  <div style="display: flex; align-items: center; gap: 3px;" class="mb-2">
    <div v-for="n in qtd" style="display: flex; gap: 3px;">
      <div class="rectangle"></div>
      <div class="rectangle" style="background-color: black;"></div>
    </div>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <div class="rectangle"></div>
    <h5 class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 class="font-weight-bold p-2 mt-2"><mark>{{ probability }}</mark></h5>
  </div>
</template>
