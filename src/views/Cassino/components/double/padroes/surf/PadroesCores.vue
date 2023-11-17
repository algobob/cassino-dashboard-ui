<script setup>
const props = defineProps({
  data: Object
})

import { Collapse } from 'vue-collapsed'
import { ref } from 'vue'

const isExpanded = ref(true)

console.log(props.estrategias)
import PadraoCor from "./PadraoCor.vue"

</script>
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;" v-if="data">
    <div>
      <h4 @click="isExpanded = !isExpanded">* Padroes</h4>
      <!-- <div class="card"> -->
        <Collapse :when="isExpanded">
        <div class="card-body">
          <div style="display: flex; gap: 60px;">
            <div style="display: flex; flex-direction: column;">
              <PadraoCor padrao="w" :data="data['w']" />
              <PadraoCor padrao="w,*,*" :data="data['w,*,*']" />
              <PadraoCor padrao="w,*,*,*" :data="data['w,*,*,*']" />
              <PadraoCor padrao="w,*,*,*,*" :data="data['w,*,*,*,*']" />
              <PadraoCor padrao="w,w" :data="data['w,w']" />
              <PadraoCor padrao="w,r" :data="data['w,r']" />
              <PadraoCor padrao="w,b" :data="data['w,b']" />
              <PadraoCor padrao="w,r,r" :data="data['w,r,r']" />
              <PadraoCor padrao="w,b,b" :data="data['w,b,b']" />
              <PadraoCor padrao="r,w,b" :data="data['r,w,b']" />
              <PadraoCor padrao="b,w,r" :data="data['b,w,r']" />
              <PadraoCor padrao="b,b,w" :data="data['b,b,w']" />
              <PadraoCor padrao="r,r,w" :data="data['r,r,w']" />
              <PadraoCor padrao="b,r,w" :data="data['b,r,w']" />
              <PadraoCor padrao="r,b,w" :data="data['r,b,w']" />
              <PadraoCor padrao="r,r,r" :data="data['r,r,r']" />
              <PadraoCor padrao="r,b,r" :data="data['r,b,r']" />
              <PadraoCor padrao="r,r" :data="data['r,r']" />
              <PadraoCor padrao="b,b" :data="data['b,b']" />
              <PadraoCor padrao="b,b,b" :data="data['b,b,b']" />
              <PadraoCor padrao="r,r,r,r" :data="data['r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b" :data="data['b,b,b,b']" />
              <PadraoCor padrao="r,r,r,r,r" :data="data['r,r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b,b" :data="data['b,b,b,b,b']" />
              <PadraoCor padrao="r,r,r,r,r,r" :data="data['r,r,r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b,b,b" :data="data['b,b,b,b,b,b']" />
              <PadraoCor padrao="b,r,b,r" :data="data['b,r,b,r']" />
              <PadraoCor padrao="b,r,b,r,b" :data="data['b,r,b,r,b']" />
              <PadraoCor padrao="r,b,r,b" :data="data['r,b,r,b']" />
              <PadraoCor padrao="r,b,r,b,r" :data="data['r,b,r,b,r']" />
              <PadraoCor padrao="r,r,b,r,r" :data="data['r,r,b,r,r']" />
              <PadraoCor padrao="r,r,b,r,r,b" :data="data['r,r,b,r,r,b']" />
              <PadraoCor padrao="r,r,b,b,r" :data="data['r,r,b,b,r']" />
              <PadraoCor padrao="b,b,r,b,b" :data="data['b,b,r,b,b']" />
              <PadraoCor padrao="b,b,r,b,b,r" :data="data['b,b,r,b,b,r']" />
            </div>
          </div>
        </div>
      </Collapse>
      <!-- </div> -->
    </div>
  </div>
</template>
