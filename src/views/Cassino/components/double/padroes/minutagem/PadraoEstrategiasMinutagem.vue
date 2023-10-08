<style scoped>

.rectangle {
  width: 60px;
  height: 40px;
  padding: 6px;
  background: whitesmoke;
  border-radius: 6px;
  border: 2px solid #666;
  color: #666;
  text-align: center;
  font: 18px Arial, sans-serif;
}
</style>
<script setup>
import RollMinuteProbability from "./RollMinuteProbability.vue";

const props = defineProps({
  estrategias: Object
})

</script>
<template>
  <div class="container" style="margin-bottom: 40px; margin-top: 40px;">
    <div class="row">
      <!-- <div class="col">
        <h4 style="text-decoration: underline;">Minutagem</h4>
        <h5 style="text-decoration: underline;margin-bottom: 40px; margin-top: 40px;">Minuto fixo</h5>
        <div style="display: flex; gap: 30px; ">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center; justify-content: center; ">
              <div class="rectangle">00</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['0'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">01</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['1'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">02</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['2'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">03</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['3'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">04</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['4'] }}
              </h4>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">05</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['5'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">06</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['6'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">07</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['7'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">08</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['8'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">09</div>
              <h4 class="m-2"> > {{ estrategias?.minutagem?.minutos_fixo['9'] }}
              </h4>
            </div>
          </div>
        </div>
      </div> -->
      <div class="col">
        <h5 style="text-decoration: underline; margin-top: 80px;">Intervalo de X min</h5>
        <div style="display: flex; flex-direction: column;">
          <h5 style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: red;">Vermelho</h5>
          <div style="display: flex; gap: 30px; margin-top: 40px;">
            <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
             <RollMinuteProbability minute="03" :probabilidade="estrategias?.minutagem?.intervalos_red['3']?.probabilidade"/>
             <RollMinuteProbability minute="04" :probabilidade="estrategias?.minutagem?.intervalos_red['4']?.probabilidade"/>
             <RollMinuteProbability minute="05" :probabilidade="estrategias?.minutagem?.intervalos_red['5']?.probabilidade"/>
             <RollMinuteProbability minute="06" :probabilidade="estrategias?.minutagem?.intervalos_red['6']?.probabilidade"/>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
              <RollMinuteProbability minute="07" :probabilidade="estrategias?.minutagem?.intervalos_red['7']?.probabilidade"/>
              <RollMinuteProbability minute="08" :probabilidade="estrategias?.minutagem?.intervalos_red['8']?.probabilidade"/>
              <RollMinuteProbability minute="09" :probabilidade="estrategias?.minutagem?.intervalos_red['9']?.probabilidade"/>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column;">
          <h5 style="text-decoration: underline; margin-top: 10px; margin-bottom: 10px; color: black;">Preto</h5>
          <div style="display: flex; gap: 30px; margin-top: 40px;">
            <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
              <RollMinuteProbability minute="03" :probabilidade="estrategias?.minutagem?.intervalos_black['3']?.probabilidade"/>
              <RollMinuteProbability minute="04" :probabilidade="estrategias?.minutagem?.intervalos_black['4']?.probabilidade"/>
              <RollMinuteProbability minute="05" :probabilidade="estrategias?.minutagem?.intervalos_black['5']?.probabilidade"/>
              <RollMinuteProbability minute="06" :probabilidade="estrategias?.minutagem?.intervalos_black['6']?.probabilidade"/>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
              <RollMinuteProbability minute="07" :probabilidade="estrategias?.minutagem?.intervalos_red['7']?.probabilidade"/>
              <RollMinuteProbability minute="08" :probabilidade="estrategias?.minutagem?.intervalos_red['8']?.probabilidade"/>
              <RollMinuteProbability minute="09" :probabilidade="estrategias?.minutagem?.intervalos_red['9']?.probabilidade"/>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
