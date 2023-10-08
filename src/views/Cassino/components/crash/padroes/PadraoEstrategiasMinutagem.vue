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
const props = defineProps({
  estrategias: Object
})

</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 style="text-decoration: underline; margin-bottom: 40px;">Minutagem</h4>
        <!-- <div class="card-header">
              <h5>Minutos:</h5>
            </div> -->
        <h5 style="text-decoration: underline;">Minuto fixo</h5>
        <div style="display: flex; gap: 30px; margin-top: 40px;">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center; justify-content: center; ">
              <div class="rectangle">00</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['0'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">01</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['1'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">02</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['2'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">03</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['3'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">04</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['4'] }}
              </h4>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">05</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['5'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">06</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['6'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">07</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['7'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">08</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['8'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">09</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['9'] }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <h5 style="text-decoration: underline; margin-top: 80px;">Intervalo de X min</h5>
        <div style="display: flex; gap: 30px; margin-top: 40px;">
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center; justify-content: center; ">
              <div class="rectangle">00</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['0'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">01</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['1'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">02</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['2'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">03</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['3'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">04</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['4'] }}
              </h4>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; width: 180px;" class="mb-2">
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">05</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['5'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">06</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['6'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">07</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['7'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">08</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['8'] }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="rectangle">09</div>
              <h4 class="m-2"> > {{ estrategias?.padroes?.minutos['9'] }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h5 style="text-decoration: underline;margin-bottom: 40px; margin-top: 40px;">Inntervalo X min apos velas X</h5>
        <div class="col">
              <div style="display: flex; align-items: center;" class="mb-2">
                <div class="numberCircle">3X</div>
                <h4 class="m-2">+ 3 min > {{ estrategias?.minutagem?.padrao_min_3x_3min?.assertividade }} - {{
                  estrategias?.minutagem?.padrao_min_3x_3min?.vela_selecionada }}x
                </h4>
              </div>
              <div style="display: flex; align-items: center;" class="mb-2">
                <div class="numberCircle">5X</div>
                <h4 class="m-2">+ 3 min > {{ estrategias?.minutagem?.padrao_min_5x_3min?.assertividade }} - {{
                  estrategias?.minutagem?.padrao_min_5x_3min?.vela_selecionada }}x
                </h4>
              </div>
              <div style="display: flex; align-items: center;" class="mb-2">
                <div class="numberCircle">10X</div>
                <h4 class="m-2">+ 3 min > {{ estrategias?.minutagem?.padrao_min_10x_3min?.assertividade }} - {{
                  estrategias?.minutagem?.padrao_min_10x_3min?.vela_selecionada }}x
                </h4>
              </div>
        </div>
        <div class="col">
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
        <div class="col">
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
</template>
