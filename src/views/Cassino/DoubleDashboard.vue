<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import PadraoEstrategiasMinutagem from "./components/PadraoEstrategiasMinutagem.vue"
import PadraoEstrategiasSomaDigitos from "./components/PadraoEstrategiasSomaDigitos.vue"
import DoubleContagemCores from "./components/DoubleContagemCores.vue"
import GraficoLinha from "./components/GraficoLinha.vue"
import Clock from "./components/Clock.vue"
import TabelaCrashes from "./components/TabelaCrashes/TabelaCrashes.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import PadraoEstrategiasAposXx from "./components/PadraoEstrategiasAposXx.vue";

const estrategias = ref({})
const contagem_cores = ref({})
const media_intervalos = ref({})
const rolls = ref([])
const qtd_velas_total = ref(0)
const qtd_rolls = ref("200")
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'

const load = () => {
  fetch(`${apiHost}/api/${platform}/double/dashboard/${qtd_rolls.value}`)
    .then(response => response.json())
    .then(data => {
      contagem_cores.value = data['contagem_cores']
    })
}

const evtSource = new EventSource("https://cassino-database-manager-production.up.railway.app/ingested");
evtSource.onmessage = (event) => {
  console.log(`message: ${event.data}`);
  load()
};

//hook
onMounted(() => {
  setNavPills();
  load()
});

const alertIfVelasAcima50 = (value) => {
  const percentageVerde = value?.percentageVerde
  const isPercentageHigherThan = parseInt(percentageVerde.slice(0, 2)) >= 52
  console.log(parseInt(percentageVerde.slice(0, 2)))

  if (isPercentageHigherThan) {
    audio.value.play();
  }
}

watch(() => contagem_cores.value, (contagemCores, prevContagemCores) => {
  // alertIfVelasAcima50(contagemCores)
})

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Double`">
    <div class="container">
      <div class="row">
        <div class="col">
          <div style="justify-content: space-between;">
            <label for="qtdRolls">
              Quantidade de rodadas:
              <input name="qtdRolls" class="input-group-static" label="Quantidade de rodadas" type="number"
                v-model="qtd_velas" />
            </label>
            <button @click="load">Load</button>
            <audio ref="audio" controls>
              <source src="https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="col">
          <Clock />
        </div>
        <div class="col"></div>
        <div class="col"></div>

      </div>
      <div class="row">
        <div class="col">
          <DoubleContagemCores :contagem_cores="contagem_cores" />
        </div>        
      </div>
    </div>

     
  </BaseLayout>
</template>
