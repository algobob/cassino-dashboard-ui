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
const props = defineProps({
  estrategias: Object
})

</script>
<template>
  <h5 class="mb-4">* Apos Xx</h5>

  <div class="card" style="width: fit-content; height: fit-content;">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col">
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">3X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos3x?.assertividade }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">4X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos4x?.assertividade }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">5X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos5x?.assertividade }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">10X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos10x?.assertividade }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">50X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos50x?.assertividade }}
              </h4>
            </div>
            <div style="display: flex; align-items: center;" class="mb-2">
              <div class="numberCircle">100X</div>
              <h4 class="m-2"> > {{ estrategias?.apos_Xx?.padrao_vela_apos100x?.assertividade }}
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
