<style scoped>
.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: whitesmoke;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}

</style>
<script setup>

const props = defineProps({
  minute: Text,
  probabilidade: Text
})

</script>
<template>
    <div style="display: flex; align-items: center;" class="mb-2">
      <div class="rectangle">{{ minute }}</div>
      <h4 class="m-2"> > {{ probabilidade }}
      </h4>
    </div>
</template>
