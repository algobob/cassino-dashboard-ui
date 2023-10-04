<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";

import MediaVelas from "./components/crash/MediaVelas.vue"
import PadraoEstrategiasMinutagem from "./components/crash/padroes/PadraoEstrategiasMinutagem.vue"
import PadraoEstrategiasSurf from "./components/crash/padroes/surf/PadraoEstrategiasSurf.vue"
import PadraoEstrategiasXadrez from "./components/crash/padroes/xadrez/PadraoEstrategiasXadrez.vue"
import PadraoEstrategiasSomaDigitos from "./components/crash/padroes/PadraoEstrategiasSomaDigitos.vue"
import ContagemCores from "./components/crash/ContagemCores.vue"
import GraficoLinha from "./components/crash/GraficoLinha.vue"
import Clock from "./components/Clock.vue"
import TabelaCrashes from "./components/crash/TabelaCrashes/TabelaCrashes.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import PadraoEstrategiasAposXx from "./components/crash/padroes/PadraoEstrategiasAposXx.vue";

const estrategias = ref({})
const contagem_cores = ref({})
const media_intervalos = ref({})
const velas = ref([])
const qtd_velas_total = ref(0)
const galho = ref(2)
const qtd_velas = ref("200")
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'

const load = () => {
  fetch(`${apiHost}/api/${platform}/crash/dashboard?qtdVelas=${qtd_velas.value}&qtdGalho=${galho.value}`)
    .then(response => response.json())
    .then(data => {
      estrategias.value = data['estrategias']
      contagem_cores.value = data['contagem_cores']
      media_intervalos.value = data['media_intervalos']
      velas.value = data['velas']
      qtd_velas_total.value = data['qtd_velas_total']
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
  const isPercentageHigherThan = parseInt(percentageVerde.slice(0, 2)) >= 51
  console.log(parseInt(percentageVerde.slice(0, 2)))

  if (isPercentageHigherThan) {
    audio.value.play();
  }
}

watch(() => contagem_cores.value, (contagemCores, prevContagemCores) => {
  alertIfVelasAcima50(contagemCores)
})

watch(() => galho.value, (galho, prevGalho) => {
  load();
})

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Crash`">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div style="justify-content: space-between;">
            <label for="qtdVelas">
              Quantidade de velas:
              <input name="qtdVelas" class="input-group-static" label="Quantidade de Velas" type="number"
                v-model="qtd_velas" />
            </label>
            <button @click="load">Load</button>
            <audio ref="audio" controls>
              <source src="https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="col-sm-8">
          <Clock />
        </div>
      </div>

      <div class="row" style="justify-content: space-between;">
        <div class="col-sm">
          <MediaVelas :media_intervalos="media_intervalos" />
        </div>
        <div class="col-sm">
          <ContagemCores :contagem_cores="contagem_cores" />
        </div>
      </div>
      <div class="row" style="margin: 2% 0%;">
        <h4>Estrategias - Probabilidades</h4>
      </div>
      <div class="row">
        <label for="qtdGalho">
          <span style="margin-right: 4px;">Galho:</span>
          <select name="qtdGalho" class="input-group-static w-5" label="Galho" v-model="galho">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </label>
      </div>
      <div class="row">
        <div class="col-6">
          <PadraoEstrategiasSurf :estrategias="estrategias" />
        </div>
        <div class="col-6">
          <PadraoEstrategiasXadrez :estrategias="estrategias" />
        </div>
      </div>
      <div class="row" style="margin: 2%;">
        <h5 class="mb-1">* Minutagem</h5>
      </div>
      <div class="row">
        <PadraoEstrategiasMinutagem :estrategias="estrategias" />
      </div>
      <div class="row">
        <div class="col">
          <PadraoEstrategiasSomaDigitos :estrategias="estrategias" />
        </div>
        <div class="col">
          <PadraoEstrategiasAposXx :estrategias="estrategias" />
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div>
      <TabelaCrashes :velas="velas" />
    </div>

  </BaseLayout>
</template>
