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
import RollMinuteProbability from "./RollMinuteProbability.vue";

const props = defineProps({
  probabilidades: {
    type: Object,
    default: () => {},
    required: true,
  },
  color: String
})

console.log('probabilidades ', props.probabilidades)

</script>
<template>
    <div style="display: flex; flex-direction: column;" v-if="probabilidades">
        <h5 v-if="color == 'red'" style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: red;">Vermelho</h5>
        <h5 v-if="color == 'black'" style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: black;">Preto</h5>
        <div style="display: flex; gap: 30px; margin-top: 40px;">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <RollMinuteProbability minute="03"
              :probabilidade="probabilidades['3'].probabilidade"  />
              <RollMinuteProbability minute="04"
              :probabilidade="probabilidades['4'].probabilidade"  />
              <RollMinuteProbability minute="05"
              :probabilidade="probabilidades['5'].probabilidade"  />
              <RollMinuteProbability minute="06"
              :probabilidade="probabilidades['6'].probabilidade"  />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <RollMinuteProbability minute="07"
              :probabilidade="probabilidades['7'].probabilidade"  />
              <RollMinuteProbability minute="08"
              :probabilidade="probabilidades['8'].probabilidade"  />
              <RollMinuteProbability minute="09"
              :probabilidade="probabilidades['9'].probabilidade"  />
          </div>
        </div>
      </div>
</template>
