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
  font: 12px Arial, sans-serif;
}

.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}
</style>

<script setup>
import { ref } from "vue";
import Vela from '../Vela.vue';

const hover = ref(false)

const props = defineProps({
  padrao: Array,
  data: Object,
  isClickable: {
    type: Boolean,
    default: true
  },
  blink: Boolean
})

const hasData = props.data && Object.keys(props.data).length

</script>
<template>
  <div style="display: flex; align-items: center; gap: 3px; position: relative;"
    :style="{ 'cursor': isClickable ? 'pointer' : 'auto' }" class="mb-2" @mouseover="hover = true"
    @mouseleave="hover = false" @click="$emit('padraoClicked', padrao)">
    <div v-for="n in padrao" style="display: flex; gap: 3px;">
      <Vela :vela="n < 2 ? 1.99 : 2" :blink="blink"/>
    </div>
    <span class="tooltiptext" v-if="hover && hasData">{{ data['hit'] }}/{{ data['tried'] }}</span>
    <h5 class="font-weight-bold p-2 mt-2"> > </h5>
    <Vela :vela="2" :blink="blink" />
    <h5 v-if="hasData" class="font-weight-bold p-2 mt-2"> ? </h5>
    <h5 v-if="hasData" class="font-weight-bold p-2 mt-2"><mark>{{ data['probabilidade'] }}% ({{ data['hit'] }}/{{ data['tried'] }})</mark></h5>
  </div>
</template>
