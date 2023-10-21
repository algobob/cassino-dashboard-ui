<script setup>
const props = defineProps({
  data: Object
})

// import { Collapse } from 'vue-collapsed'
// import { ref } from 'vue'

// const isExpanded = ref(false)

console.log(props.estrategias)
import PadraoCor from "./PadraoCor.vue"

</script>
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;" v-if="data">
    <div>
      <h4>* Surf</h4>
      <!-- <h4 @click="isExpanded = !isExpanded">* Surf</h4> -->
      <!-- <div class="card"> -->
        <!-- <Collapse :when="isExpanded"> -->
        <div class="card-body">
          <div style="display: flex; gap: 60px;">
            <div style="display: flex; flex-direction: column;">
              <PadraoCor padrao="w" :data="data['w']" />
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
              <PadraoCor padrao="b,b,b" :data="data['b,b,b']" />
              <PadraoCor padrao="r,r,r,r" :data="data['r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b" :data="data['b,b,b,b']" />
              <PadraoCor padrao="r,r,r,r,r" :data="data['r,r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b,b" :data="data['b,b,b,b,b']" />
              <PadraoCor padrao="r,r,r,r,r,r" :data="data['r,r,r,r,r,r']" />
              <PadraoCor padrao="b,b,b,b,b,b" :data="data['b,b,b,b,b,b']" />
              <!-- <PadraoSurf :qtd="2" color="black" targetColor="black" :data="data?.duplo?.black" />
              <PadraoSurf :qtd="2" color="red" targetColor="black"
                :data="data?.duplo?.red_targetBlack" />
              <PadraoSurf :qtd="2" color="black" targetColor="red"
                :data="data?.duplo?.black_targetRed" />
              <PadraoSurf :qtd="3" color="red" targetColor="red" :data="data?.triplo?.red" />
              <PadraoSurf :qtd="3" color="black" targetColor="black" :data="data?.triplo?.black" />
              <PadraoSurf :qtd="3" color="red" targetColor="black"
                :data="data?.triplo?.red_targetBlack" />
              <PadraoSurf :qtd="3" color="black" targetColor="red"
                :data="data?.triplo?.black_targetRed" />
              <PadraoSurf :qtd="4" color="red" targetColor="red" :data="data?.quadruplo?.red" />
              <PadraoSurf :qtd="4" color="black" targetColor="black" :data="data?.quadruplo?.black" />
              <PadraoSurf :qtd="4" color="red" targetColor="black"
                :data="data?.quadruplo?.red_targetBlack" />
              <PadraoSurf :qtd="4" color="black" targetColor="red"
                :data="data?.quadruplo?.black_targetRed" /> -->
            </div>
          </div>
        </div>
      <!-- </Collapse> -->
      <!-- </div> -->
    </div>
  </div>
</template>
