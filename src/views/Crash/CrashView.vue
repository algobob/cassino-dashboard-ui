<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import PadraoEstrategias from "./components/PadraoEstrategias.vue"
import ContagemCores from "./components/ContagemCores.vue"
import GraficoLinha from "./components/GraficoLinha.vue"
import Clock from "./components/Clock.vue"
import TabelaCrashes from "./components/TabelaCrashes/TabelaCrashes.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const estrategias = ref({})
const contagem_cores = ref({})
const media_intervalos = ref({})
const velas = ref([])
const qtd_velas_total = ref(0)
const qtd_velas = ref("200")
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'

const load = () => {
  fetch(`${apiHost}/api/${platform}/crash/dashboard/${qtd_velas.value}`)
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
  console.log(percentageVerde)
  if (percentageVerde.startsWith("5")) {
    audio.value.play();
  }
}

watch(() => contagem_cores.value, (contagemCores, prevContagemCores) => {
    alertIfVelasAcima50(contagemCores)
})

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Crash`">
    <div style="width: 30%; display:inline;">
      <label for="qtdVelas">
        Quantidade de velas:
        <input name="qtdVelas" class="input-group-static" label="Quantidade de Velas" type="number" v-model="qtd_velas" />
      </label>
      <button class="mt-2" @click="load">Load</button>
      <Clock />
      <audio ref="audio" controls>
        <source src="https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>

    <div style="width: 100%;: ;" class="mt-2">
      <PadraoEstrategias :estrategias="estrategias" />
    </div>
    <div style="display: flex;" class="mt-2">
      <MediaVelas :media_intervalos="media_intervalos" />
      <ContagemCores :contagem_cores="contagem_cores" />
      <!-- <GraficoLinha :contagem_cores = "contagem_cores" /> -->
    </div>
    <div>
      <TabelaCrashes :velas="velas" />
    </div>

  </BaseLayout>
</template>
