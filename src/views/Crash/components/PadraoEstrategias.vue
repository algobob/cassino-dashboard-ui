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
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.aaa?.assertividade }} - {{ estrategias?.aaa?.vela_selecionada }}x
          </h4>
        </div>

        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.a?.assertividade }} - {{ estrategias?.a?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2">+ 3 min ====> {{ estrategias?.b?.assertividade }} - {{ estrategias?.b?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.aa?.assertividade }} - {{ estrategias?.aa?.vela_selecionada }}x
          </h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.c?.assertividade }} - {{ estrategias?.c?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">10X</div>
          <h4 class="m-2">+ 5 min ====> {{ estrategias?.d?.assertividade }} - {{ estrategias?.d?.vela_selecionada }}x</h4>
        </div>
      </div>
      <div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">3X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.e?.assertividade }} - {{
            estrategias?.e?.vela_selecionada }}x</h4>
        </div>
        <div style="display: flex; align-items: center;" class="mb-2">
          <div class="numberCircle">5X</div>
          <h4 class="m-2">+ (soma digitos) min ====> {{ estrategias?.f?.assertividade }} - {{
            estrategias?.f?.vela_selecionada }}x</h4>
        </div>

      </div>
    </div>
  </div>
</template>
