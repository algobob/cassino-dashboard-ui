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
</style>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  estrategias: Object
})

const audio = new Audio('https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3');

const alertIfAnyStrategy100 = (value) => {
  const asString = JSON.stringify(value)
  console.log(asString)
  if (asString.includes("100%")) {
    // audio.play();
  }
}

watch(() => props.estrategias, (estrategias, prevEstrategias) => {
  if (JSON.stringify(estrategias) !== JSON.stringify(prevEstrategias)) {
    alertIfAnyStrategy100(prevEstrategias)
  }
})

</script>
<template>
  <div class="card" style="width: 1000%;">
    <div class="card-header">
      <h5 class="card-title">Estrategias - Probabilidades</h5>
    </div>
    <div class="card-body" style="display: flex;">
      <div >
        <h5 class="mb-4">* Minutagem</h5>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.minutagem?.padrao_min_3x_3min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_3x_3min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ 4 min ====> {{ estrategias?.minutagem?.padrao_min_3x_4min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_3x_4min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.minutagem?.padrao_min_3x_5min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_3x_5min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.minutagem?.padrao_min_5x_3min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_5x_3min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ 4 min ====> {{ estrategias?.minutagem?.padrao_min_5x_4min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_5x_4min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.minutagem?.padrao_min_5x_5min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_5x_5min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.minutagem?.padrao_min_10x_3min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_10x_3min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2">+ 4 min ====> {{ estrategias?.minutagem?.padrao_min_10x_4min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_10x_4min?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.minutagem?.padrao_min_10x_5min?.assertividade }} - {{ estrategias?.minutagem?.padrao_min_10x_5min?.vela_selecionada }}x
          </h4>
        </div>
      </div>
      <div style="margin-left: 40px;">
        <h5 class="mb-4">* Soma digitos</h5>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.soma_digitos?.padrao_soma_digitos_3x?.assertividade }} - {{
            estrategias?.soma_digitos?.padrao_soma_digitos_3x?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">4X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.soma_digitos?.padrao_soma_digitos_4x?.assertividade }} - {{
            estrategias?.soma_digitos?.padrao_soma_digitos_4x?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.soma_digitos?.padrao_soma_digitos_5x?.assertividade }} - {{
            estrategias?.soma_digitos?.padrao_soma_digitos_5x?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">6X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.soma_digitos?.padrao_soma_digitos_6x?.assertividade }} - {{
            estrategias?.soma_digitos?.padrao_soma_digitos_6x?.vela_selecionada }}x</h4>
        </div>

      </div>
      <!-- <div style="margin-left: 40px;">
        <h5 class="mb-4">* Apos Xx</h5>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xxpadrao_vela_apos3x?.assertividade }}
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">4X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xx?.padrao_vela_apos4x?.assertividade }}
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xx?.padrao_vela_apos5x?.assertividade }}
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xx?.padrao_vela_apos10x?.assertividade }}
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">50X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xx?.padrao_vela_apos50x?.assertividade }}
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">100X</div>
          <h4 class="m-2"> ==> {{ estrategias?.apos_Xx?.padrao_vela_apos100x?.assertividade }}
          </h4>
        </div>
      </div> -->
    </div>
  </div>
</template>
