<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"

</script>
<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap;">
    <div>
      <div class="card">
        <div class="card-header">
          <h4>* Surf</h4>
        </div>
        <div class="card-body">
          <div style="display: flex; gap: 60px;">
            <div style="display: flex; flex-direction: column;">
              <PadraoSurf :qtd="2" color="red" targetColor="red" :probability="estrategias?.surf?.duplo?.red" />
              <PadraoSurf :qtd="2" color="black" targetColor="black" :probability="estrategias?.surf?.duplo?.black" />
              <PadraoSurf :qtd="2" color="red" targetColor="black"
                :probability="estrategias?.surf?.duplo?.red_targetBlack" />
              <PadraoSurf :qtd="2" color="black" targetColor="red"
                :probability="estrategias?.surf?.duplo?.black_targetRed" />
            </div>
            <div style="display: flex; flex-direction: column;">
              <PadraoSurf :qtd="3" color="red" targetColor="red" :probability="estrategias?.surf?.triplo?.red" />
              <PadraoSurf :qtd="3" color="black" targetColor="black" :probability="estrategias?.surf?.triplo?.black" />
              <PadraoSurf :qtd="3" color="red" targetColor="black"
                :probability="estrategias?.surf?.triplo?.red_targetBlack" />
              <PadraoSurf :qtd="3" color="black" targetColor="red"
                :probability="estrategias?.surf?.triplo?.black_targetRed" />
            </div>
            <div style="display: flex; flex-direction: column;">
              <PadraoSurf :qtd="4" color="red" targetColor="red" :probability="estrategias?.surf?.quadruplo?.red" />
              <PadraoSurf :qtd="4" color="black" targetColor="black" :probability="estrategias?.surf?.quadruplo?.black" />
              <PadraoSurf :qtd="4" color="red" targetColor="black"
                :probability="estrategias?.surf?.quadruplo?.red_targetBlack" />
              <PadraoSurf :qtd="4" color="black" targetColor="red"
                :probability="estrategias?.surf?.quadruplo?.black_targetRed" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
