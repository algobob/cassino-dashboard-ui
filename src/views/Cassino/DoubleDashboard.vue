<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import DoubleContagemCores from "./components/double/DoubleContagemCores.vue"
import Caixa from "./components/double/Caixa.vue"
import Clock from "./components/Clock.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import DoubleNumeroCor from "./components/double/DoubleNumeroCor.vue";
import PadraoEstrategiasMinutagem from "./components/double/padroes/minutagem/PadraoEstrategiasMinutagem.vue";
import PadroesCores from "./components/double/padroes/surf/PadroesCores.vue";
import TabelaDouble from "./components/double/TabelaDouble/TabelaDouble.vue";

const estrategias = ref({})
const contagem_cores = ref({})
const balance = ref({})
const rolls = ref([])
const qtd_rolls = ref("200")
const targetColor = ref("*")
const galho = ref(2)
const minProbabilidade = ref(50)
const route = useRoute()
const platform = route.params.platform
const audio = ref()
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'

const load = () => {
  fetch(`${apiHost}/api/${platform}/double/dashboard?
  qtdRolls=${qtd_rolls.value}&
  galho=${galho.value}&
  minProbabilidade=${minProbabilidade.value}&
  targetColor=${targetColor.value}&
  padrao=w&
  padrao=w,w&
  padrao=w,r&
  padrao=w,b&
  padrao=w,r,r&
  padrao=w,b,b&
  padrao=r,w,b&
  padrao=b,w,r&
  padrao=b,b,w&
  padrao=r,r,w&
  padrao=b,r,w&
  padrao=r,b,w&
  padrao=r,r,r&
  padrao=b,b,b&
  padrao=r,r,r,r&
  padrao=b,b,b,b&
  padrao=r,r,r,r,r&
  padrao=b,b,b,b,b&
  padrao=r,r,r,r,r,r&
  padrao=b,b,b,b,b,b&
  `.replace(/ /g,''))
    .then(response => response.json())
    .then(data => {
      contagem_cores.value = data['contagem_cores']
      estrategias.value = data['estrategias']
      rolls.value = data['rolls']
      balance.value = data['balance']
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

watch(() => galho.value, (galho, prevGalho) => {
  load()
})

watch(() => qtd_rolls.value, (qtdRolls, prevQtdRolls) => {
  load()
})
watch(() => minProbabilidade.value, (minProbabilidade, prevMinProbabilidade) => {
  load()
})
watch(() => targetColor.value, (targetColor, prevTargetColor) => {
  load()
})

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Double`" v-if="estrategias">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div style="display: flex; gap: 20px; flex-direction: column;">
                <Clock />
                <div style="display: flex; gap: 10px;">
                  <span> Rodadas: </span>
                  <input name="qtdRolls" type="number" v-model="qtd_rolls" style="height: 30px;" />
                </div>
                <audio ref="audio" controls>
                  <source src="https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <Caixa :balance="balance"/>
        </div>
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
        <div style="display: flex;">
          <span style="margin-right: 12px; font-size: large; width: fit-content;">Galho:</span>
          <input type="number" v-model="galho" style="width: 60px;" />
        </div>
        <div style="display: flex; gap: 10px;">
          <span> Min %: </span>
          <input name="minProbabilidade" type="number" v-model="minProbabilidade" style="height: 30px; width: 60px;" />
        </div>
        <div style="display: flex; gap: 10px;">
          <label for="targetColor">Cor:</label>
          <select name="colors" id="colors" v-model="targetColor">
            <option value="*">Todas</option>
            <option value="red">Vermelha</option>
            <option value="black">Preta</option>
            <option value="white">Branca</option>
          </select>
        </div>
      </div>
      <div class="row">
        <PadroesCores :data="estrategias?.padroes" />
      </div>
      <div class="row">
        <DoubleNumeroCor :data="estrategias?.numero_cor_probabilidades" />
      </div>
      <div class="row">
        <PadraoEstrategiasMinutagem :estrategias="estrategias" />
      </div>
      <div>
        <TabelaDouble :rolls="rolls" />
      </div>
    </div>
  </BaseLayout>
</template>
