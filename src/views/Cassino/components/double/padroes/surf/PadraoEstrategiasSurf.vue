<script setup>
const props = defineProps({
  data: Object
})

// import { Collapse } from 'vue-collapsed'
// import { ref } from 'vue'

// const isExpanded = ref(false)

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"

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
              <PadraoSurf :qtd="2" color="red" targetColor="red" :data="data?.duplo?.red" />
              <PadraoSurf :qtd="2" color="black" targetColor="black" :data="data?.duplo?.black" />
              <PadraoSurf :qtd="2" color="red" targetColor="black"
                :data="data?.duplo?.red_targetBlack" />
              <PadraoSurf :qtd="2" color="black" targetColor="red"
                :data="data?.duplo?.black_targetRed" />
            </div>
            <div style="display: flex; flex-direction: column;">
              <PadraoSurf :qtd="3" color="red" targetColor="red" :data="data?.triplo?.red" />
              <PadraoSurf :qtd="3" color="black" targetColor="black" :data="data?.triplo?.black" />
              <PadraoSurf :qtd="3" color="red" targetColor="black"
                :data="data?.triplo?.red_targetBlack" />
              <PadraoSurf :qtd="3" color="black" targetColor="red"
                :data="data?.triplo?.black_targetRed" />
            </div>
            <div style="display: flex; flex-direction: column;">
              <PadraoSurf :qtd="4" color="red" targetColor="red" :data="data?.quadruplo?.red" />
              <PadraoSurf :qtd="4" color="black" targetColor="black" :data="data?.quadruplo?.black" />
              <PadraoSurf :qtd="4" color="red" targetColor="black"
                :data="data?.quadruplo?.red_targetBlack" />
              <PadraoSurf :qtd="4" color="black" targetColor="red"
                :data="data?.quadruplo?.black_targetRed" />
            </div>
          </div>
        </div>
      <!-- </Collapse> -->
      <!-- </div> -->
    </div>
  </div>
</template>
