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
  color: String,
  isMinFixo: Boolean
})

</script>
<template>
    <div style="display: flex; flex-direction: column;" v-if="probabilidades">
        <h5 v-if="color == 'red'" style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: red;">Vermelho</h5>
        <h5 v-if="color == 'black'" style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: black;">Preto</h5>
        <div style="display: flex; gap: 30px; margin-top: 40px;">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <RollMinuteProbability minute="03"
              :data="probabilidades['3']" :isMinFixo="isMinFixo"  />
              <RollMinuteProbability minute="04"
              :data="probabilidades['4']" :isMinFixo="isMinFixo"  />
              <RollMinuteProbability minute="05"
              :data="probabilidades['5']" :isMinFixo="isMinFixo"  />
              <RollMinuteProbability minute="06"
              :data="probabilidades['6']" :isMinFixo="isMinFixo" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <RollMinuteProbability minute="07"
              :data="probabilidades['7']" :isMinFixo="isMinFixo" />
              <RollMinuteProbability minute="08"
              :data="probabilidades['8']" :isMinFixo="isMinFixo" />
              <RollMinuteProbability minute="09"
              :data="probabilidades['9']"  :isMinFixo="isMinFixo"/>
          </div>
        </div>
      </div>
</template>
