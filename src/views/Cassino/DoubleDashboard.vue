<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import DoubleContagemCores from "./components/double/DoubleContagemCores.vue"
import Clock from "./components/Clock.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import DoubleNumeroCor from "./components/double/DoubleNumeroCor.vue";
import PadraoEstrategiasSurf from "./components/double/padroes/surf/PadraoEstrategiasSurf.vue";
import TabelaDouble from "./components/double/TabelaDouble/TabelaDouble.vue";

const estrategias = ref({})
const contagem_cores = ref({})
const rolls = ref([])
const qtd_rolls = ref("200")
const galho = ref(2)
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'

const load = () => {
  fetch(`${apiHost}/api/${platform}/double/dashboard?qtdRolls=${qtd_rolls.value}&galho=${galho}`)
    .then(response => response.json())
    .then(data => {
      contagem_cores.value = data['contagem_cores']
      estrategias.value = data['estrategias']
      rolls.value = data['rolls']
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
          <div>
            <label for="qtdRolls">
              Quantidade de rodadas:
              <input name="qtdRolls" class="input-group-static" label="Quantidade de rodadas" type="number"
                v-model="qtd_rolls" />
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
      <div class="row">
        <h4 class="mt-2">Estrategias</h4>
      </div>
      <div class="row">
        <label for="qtdGalho">
             <span style="margin-right: 4px;">Galho:</span>
              <select name="qtdGalho" class="input-group-static w-5" label="Galho" v-model="galho">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
        </label>
        </div>
      <div class="row">
        <PadraoEstrategiasSurf :estrategias="estrategias" />
      </div>
      <div class="row">
        <div class="col">
          <DoubleNumeroCor :estrategias="estrategias" />
        </div>
      </div>
      <div>
        <TabelaDouble :rolls="rolls" />
      </div>
    </div>
  </BaseLayout>
</template>
