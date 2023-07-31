<script setup>
import { watch } from 'vue';

const props = defineProps(['contagem_cores'])
console.log(props.contagem_cores)

const audio = new Audio('https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3');

const alertIfVelasAcima50 = (value) => {
  const percentageVerde = value?.percentageVerde
  console.log(percentageVerde)
  if (percentageVerde.startsWith("4")) {
    audio.play();
  }
}

watch(() => props.contagem_cores, (contagemCores, prevContagemCores) => {
  if (JSON.stringify(contagemCores) !== JSON.stringify(prevContagemCores)) {
    alertIfVelasAcima50(contagemCores)
  }
})

</script>
<template>
  <div class="card" style="width: auto; margin: 0 10px;">
    <div class="card-header">
      <h5 class="card-title">Contagem de cores</h5>
    </div>
    <div class="card-body">
      <div style="display: flex;">

        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">
              <div style="width: 40%;
  height: 0;
  padding-top: 40%;
  background-color: black;">&#9632;</div>
            </h5>
            <p class="card-text"><mark>{{ contagem_cores.qtdPreta }} ({{ contagem_cores.percentagePreta }}) Pretos</mark></p>
          </div>
        </div>

        <div class="card" style="width: auto; margin: 0 10px;">
          <div class="card-body">
            <h5 class="card-title">
              <div style="width: 40%;
  height: 0;
  padding-top: 40%;
  background-color: greenyellow;">&#9632;</div>
            </h5>
            <p class="card-text"><mark>{{ contagem_cores.qtdVerde }} ({{ contagem_cores.percentageVerde }}) Verdes</mark></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
