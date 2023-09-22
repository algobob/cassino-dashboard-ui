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

import PadraoDuplo from "./PadraoDuplo.vue"

</script>
<template>  
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <PadraoDuplo :min="2" :max="3"/>             
                <PadraoDuplo :min="3" :max="4"/>             
                <PadraoDuplo :min="4" :max="5"/>             
                <PadraoDuplo :min="5" :max="10"/>             
                <PadraoDuplo :min="10" :max="50"/>             
                <PadraoDuplo :min="50" :max="100"/>             
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div style="display: flex; align-items: center;" class="mb-2">
                  <div class="numberCircle">3X</div>
                  <h4 class="m-2">+ 4 min > {{ estrategias?.minutagem?.padrao_min_3x_4min?.assertividade }} - {{
                    estrategias?.minutagem?.padrao_min_3x_4min?.vela_selecionada }}x
                  </h4>
                </div>
                <div style="display: flex; align-items: center;" class="mb-2">
                  <div class="numberCircle">5X</div>
                  <h4 class="m-2">+ 4 min > {{ estrategias?.minutagem?.padrao_min_5x_4min?.assertividade }} - {{
                    estrategias?.minutagem?.padrao_min_5x_4min?.vela_selecionada }}x
                  </h4>
                </div>
                <div style="display: flex; align-items: center;" class="mb-2">
                  <div class="numberCircle">10X</div>
                  <h4 class="m-2">+ 4 min > {{ estrategias?.minutagem?.padrao_min_10x_4min?.assertividade }} - {{
                    estrategias?.minutagem?.padrao_min_10x_4min?.vela_selecionada }}x
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">3X</div>
              <h4 class="m-2">+ 5 min > {{ estrategias?.minutagem?.padrao_min_3x_5min?.assertividade }} - {{
                estrategias?.minutagem?.padrao_min_3x_5min?.vela_selecionada }}x
              </h4>
            </div>


            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">5X</div>
              <h4 class="m-2">+ 5 min > {{ estrategias?.minutagem?.padrao_min_5x_5min?.assertividade }} - {{
                estrategias?.minutagem?.padrao_min_5x_5min?.vela_selecionada }}x
              </h4>
            </div>


            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">10X</div>
              <h4 class="m-2">+ 5 min > {{ estrategias?.minutagem?.padrao_min_10x_5min?.assertividade }} - {{
                estrategias?.minutagem?.padrao_min_10x_5min?.vela_selecionada }}x
              </h4>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>    
</template>
