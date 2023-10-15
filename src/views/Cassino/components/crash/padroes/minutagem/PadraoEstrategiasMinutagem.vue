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

.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: greenyellow;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}
</style>

<script setup>

import EntradaMinutoAposVelaProbabilidade from './components/EntradaMinutoAposVelaProbabilidade.vue';
import EntradaMinutoProbabilidade from './components/EntradaMinutoProbabilidade.vue';

const props = defineProps({
  minutagem: Object
})

</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 style="text-decoration: underline; margin-bottom: 40px;">Minutagem</h4>
        <h5 style="text-decoration: underline;">Minuto fixo</h5>
        <!-- <div style="display: flex; gap: 30px; margin-top: 40px;"> -->
          <div style="display: flex; flex-flow: column wrap; margin-top: 40px; align-items: center; width: 180px; max-height: 450px; gap: 20px;" class="mb-2">
            <EntradaMinutoProbabilidade minuto="00" :probabilidade="minutagem?.minutos_fixo['0']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="01" :probabilidade="minutagem?.minutos_fixo['1']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="02" :probabilidade="minutagem?.minutos_fixo['2']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="03" :probabilidade="minutagem?.minutos_fixo['3']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="04" :probabilidade="minutagem?.minutos_fixo['4']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="05" :probabilidade="minutagem?.minutos_fixo['5']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="06" :probabilidade="minutagem?.minutos_fixo['6']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="07" :probabilidade="minutagem?.minutos_fixo['7']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="08" :probabilidade="minutagem?.minutos_fixo['8']" :isMinutoFixo="true" />
            <EntradaMinutoProbabilidade minuto="09" :probabilidade="minutagem?.minutos_fixo['9']" :isMinutoFixo="true" />
          </div>
        <!-- </div> -->
      </div>
      <div class="col">
        <h5 style="text-decoration: underline; margin-top: 80px;">Intervalo de X min</h5>
        <div style="display: flex; gap: 30px; margin-top: 40px;">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <EntradaMinutoProbabilidade minuto="03" :probabilidade="minutagem?.intervalos['3']" />
            <EntradaMinutoProbabilidade minuto="04" :probabilidade="minutagem?.intervalos['4']" />
            <EntradaMinutoProbabilidade minuto="05" :probabilidade="minutagem?.intervalos['5']" />
            <EntradaMinutoProbabilidade minuto="06" :probabilidade="minutagem?.intervalos['6']" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <EntradaMinutoProbabilidade minuto="07" :probabilidade="minutagem?.intervalos['7']" />
            <EntradaMinutoProbabilidade minuto="08" :probabilidade="minutagem?.intervalos['8']" />
            <EntradaMinutoProbabilidade minuto="09" :probabilidade="minutagem?.intervalos['9']" />
          </div>
        </div>
      </div>
      <div class="row">
        <h5 style="text-decoration: underline;margin-bottom: 40px; margin-top: 40px;">Intervalo X min apos velas X</h5>
        <div class="col">
          <EntradaMinutoAposVelaProbabilidade vela="3X" minuto="3"
            :probabilidade="minutagem?.intervalos_para_vela?.vela['3x']?.minuto['3'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="3X" minuto="4"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['3x']?.minuto['4'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="3X" minuto="5"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['3x']?.minuto['5'].assertividade" />
        </div>
        <div class="col">
          <EntradaMinutoAposVelaProbabilidade vela="5X" minuto="3"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['5x']?.minuto['3'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="5X" minuto="4"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['5x']?.minuto['4'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="5X" minuto="5"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['5x']?.minuto['5'].assertividade" />
        </div>
        <div class="col">
          <EntradaMinutoAposVelaProbabilidade vela="10X" minuto="3"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['10x']?.minuto['3'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="10X" minuto="4"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['10x']?.minuto['4'].assertividade" />
          <EntradaMinutoAposVelaProbabilidade vela="10X" minuto="5"
          :probabilidade="minutagem?.intervalos_para_vela?.vela['10x']?.minuto['5'].assertividade" />
      </div>
    </div>
  </div>
</div></template>
