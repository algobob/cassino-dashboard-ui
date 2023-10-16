<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";

import MediaVelas from "./components/crash/MediaVelas.vue"
import PadraoEstrategiasMinutagem from "./components/crash/padroes/minutagem/PadraoEstrategiasMinutagem.vue"
import PadraoEstrategiasSurf from "./components/crash/padroes/surf/PadraoEstrategiasSurf.vue"
import PadraoEstrategiasXadrez from "./components/crash/padroes/xadrez/PadraoEstrategiasXadrez.vue"
import PadraoEstrategiasSomaDigitos from "./components/crash/padroes/minutagem/PadraoEstrategiasSomaDigitos.vue"
import ContagemCores from "./components/crash/ContagemCores.vue"
import Caixa from "./components/crash/Caixa.vue"
import GraficoLinha from "./components/crash/GraficoLinha.vue"
import Clock from "./components/Clock.vue"
import TabelaCrashes from "./components/crash/TabelaCrashes/TabelaCrashes.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const estrategias = ref({})
const contagem_cores = ref({})
const media_velas = ref({})
const velas = ref([])
const qtd_velas_total = ref(0)
const galho = ref(2)
const targetVela = ref(2)
const balance = ref(0)
const qtd_velas = ref("200")
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'
const loaded = ref(false)
const minProbabilidade = ref(50)

const load = () => {
  fetch(`${apiHost}/api/${platform}/crash/dashboard?minProbabilidade=${minProbabilidade.value}&qtdVelas=${qtd_velas.value}&qtdGalho=${galho.value}&targetVela=${targetVela.value}`)
    .then(response => response.json())
    .then(data => {
      estrategias.value = data['estrategias']
      contagem_cores.value = data['contagem_cores']
      media_velas.value = data['media_velas']
      velas.value = data['velas']
      qtd_velas_total.value = data['qtd_velas_total']
      balance.value = data['balance']
      loaded.value = true
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
    audio?.value?.play();
  }
}

watch(() => contagem_cores.value, (contagemCores, prevContagemCores) => {
  alertIfVelasAcima50(contagemCores)
})

watch(() => galho.value, (galho, prevGalho) => {
  load();
})

watch(() => targetVela.value, (targetVela, prevTargetVela) => {
  load();
})

watch(() => minProbabilidade.value, (targetMinProbabilidade, prevMinProbabilidade) => {
  load();
})

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Crash`">
    <div class="container" v-if="loaded">
      <div class="row">
        <div class="col">
          <div style="display: flex; flex-direction: column; gap: 10px;">
              Quantidade de velas:
              <input name="qtdVelas" label="Quantidade de Velas" type="number"
                v-model="qtd_velas" style="width: fit-content;"/>
                <button @click="load" style="width: fit-content;">Load</button>
            <audio ref="audio" controls muted>
              <source src="https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="col">
          <Clock />
        </div>
        <div class="col">
          <Caixa :balance="balance"/>
        </div>
      </div>

      <div class="row" style="justify-content: space-between;">
        <div class="col-sm">
          <MediaVelas :media_velas="media_velas" />
        </div>
        <div class="col-sm">
          <ContagemCores :contagem_cores="contagem_cores" />
        </div>
      </div>
      <div class="row">
        <h4 style="margin-top: 40px; margin-bottom: 40px; text-decoration: underline;">Estrategias</h4>
      </div>
      <div class="row">
        <div style="display: flex;">
          <span style="margin-right: 12px; font-size: large; width: fit-content;">Galho:</span>
          <input type="number" v-model="galho" style="width: 60px;" />
        </div>
      </div>
      <div class="row">
        <div style="display: flex;">
          <span style="margin-right: 22px; font-size: large; width: fit-content;">Vela:</span>
          <input type="number" v-model="targetVela" style="width: 60px;" />
        </div>
      </div>
      <div class="row">
        <div style="display: flex;">
          <span style="margin-right: 10px; font-size: large; width: fit-content;">Min %:</span>
          <input type="number" v-model="minProbabilidade" style="width: 60px;" />
        </div>
      </div>
      <div class="row">
        <PadraoEstrategiasSurf :surf="estrategias?.padroes?.surf" />
      </div>
      <div class="row">
        <PadraoEstrategiasXadrez :xadrez="estrategias?.padroes?.xadrez" />
      </div>
      <div class="row">
        <PadraoEstrategiasMinutagem :minutagem="estrategias?.minutagem" />
      </div>
    </div>
    <div>
      <TabelaCrashes :velas="velas" />
    </div>

  </BaseLayout>
</template>
