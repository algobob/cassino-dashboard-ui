<style scoped>
.numberCircle {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding: 9px;

  background: greenyellow;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 18px Arial, sans-serif;
}

.rectangle{
    width:75px;
    height:40px;
    padding: 6px;
    background:greenyellow;
    border-radius: 6px;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif;
}
</style>

<script setup>
const props = defineProps({
  estrategias: Object
})

console.log(props.estrategias)
import PadraoSurf from "./PadraoSurf.vue"

</script>
<template>  
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <PadraoSurf :qtd="2" :min="2" :max="10" :probability="estrategias?.apos_padrao_surf?.duplo_2and10"/>             
                <PadraoSurf :qtd="2" :min="2" :max="100" :probability="estrategias?.apos_padrao_surf?.duplo_2and100"/>             
                <PadraoSurf :qtd="3" :min="2" :max="100" :probability="estrategias?.apos_padrao_surf?.triplo_2and100"/>             
                <PadraoSurf :qtd="4" :min="2" :max="100" :probability="estrategias?.apos_padrao_surf?.quadruplo_2and100"/>             
              </div>
            </div>
          </div>
        </div>
      </div>    
</template>
