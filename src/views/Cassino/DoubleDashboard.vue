<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router'

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import DoubleContagemCores from "@/components/double/DoubleContagemCores.vue"
import Caixa from "@/components/double/Caixa.vue"
import Tools from "@/components/commons/index.vue"
import { startCase } from 'lodash';
//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import DoubleNumeroCor from "@/components/double/DoubleNumeroCor.vue";
import PadraoEstrategiasMinutagem from "@/components/double/padroes/minutagem/PadraoEstrategiasMinutagem.vue";
import PadroesCores from "@/components/double/padroes/cores/PadroesCores.vue";
import TabelaDouble from "@/components/double/TabelaDouble/TabelaDouble.vue";
import AlarmePadroes from "@/components/double/padroes/Alarme/AlarmePadroes.vue";
import { Collapse } from 'vue-collapsed'
import MaterialProgress from "@/components/MaterialProgress.vue";

const estrategias = ref({})
const contagem_cores = ref({})
const balance = ref({})
const rolls = ref([])
const qtd_rolls = ref("200")
const targetColor = ref("*")
const galho = ref(0)
const minProbabilidade = ref(50)
const maxProbabilidade = ref(100)
const route = useRoute()
const platform = route.params.platform
const apiHost = import.meta.env.DEV ? '' : 'https://cassino-online-api-production.up.railway.app'
const isExpanded = ref(true)
const loading = ref(false)
const padroesSelecionados = ref([])

const onPadraoSelecionado = (padrao, target) => {
  if (padrao instanceof Array){
    padroesSelecionados.value.push({padrao, target})
  } else {
    padroesSelecionados.value.push([{padrao, target}])
  }
}

const loadEstrategias = () => {
  estrategias.value = {}
  loading.value = true
  fetch(`${apiHost}/api/${platform}/double/estrategias?
  qtdRolls=${qtd_rolls.value}&
  qtdGalho=${galho.value}&
  minProbabilidade=${minProbabilidade.value}&
  maxProbabilidade=${maxProbabilidade.value}&
  targetColor=${targetColor.value}`.replace(/ /g, ''))
    .then(response => response.json())
    .then(data => {
      loading.value = false
      estrategias.value = data['estrategias']
    })
}

const loadDashboard = () => {
  fetch(`${apiHost}/api/${platform}/double/dashboard?qtdRolls=${qtd_rolls.value}`.replace(/ /g, ''))
    .then(response => response.json())
    .then(data => {
      contagem_cores.value = data['contagem_cores']
      rolls.value = data['rolls']
      balance.value = data['balance']
    })
}

const loadRolls = () => {
  fetch(`${import.meta.env.DEV ? '':'https://djabet-repository-api-production.up.railway.app/api/double'}?platform=${platform}&sort=desc&qtd=${qtd_rolls.value}`.replace(/ /g, ''))
    .then(response => response.json())
    .then(data => {
      rolls.value = data;
    });
}

const limparPadroesSelecionados = () => {
  padroesSelecionados.value = []
}

const evtSource = new EventSource(`https://djabet-repository-api-production.up.railway.app/api/double/sse`);
evtSource.onmessage = (event) => {
  const roll = JSON.parse(event.data);
  if (roll.platform === platform) {
     console.log(`message: ${event.data}`);
     loadRolls();
  }
};

//hook
onMounted(() => {
  document.title = `Djabet | ${startCase(platform)} | Double`
  setNavPills();
  loadDashboard()
});

</script>
<template>
  <BaseLayout :title="`${startCase(platform)} - Double`" v-if="rolls">
    <div class="container">
      <div class="row">
        <div class="col">
          <Tools />
        </div>
        <div class="col">
          <Caixa :balance="balance" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <DoubleContagemCores :contagem_cores="contagem_cores" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AlarmePadroes :rolls="rolls" :padroesSelecionados="padroesSelecionados" :platform="startCase(platform)" 
          :limpar-padroes-selecionados="limparPadroesSelecionados"/>
        </div>
      </div>
      <div class="row">
        <h4 class="mt-2" @click="isExpanded = !isExpanded" style="width: fit-content;">Estrategias</h4>
      </div>
      <Collapse :when="isExpanded">
        <div class="row">
          <div style="display: flex; gap: 2%; flex-wrap: wrap; margin-bottom: 5%;">
            <div style="display: flex; gap: 10px;">
              <span> Rodadas: </span>
              <input name="qtdRolls" type="number" v-model="qtd_rolls" style="height: 30px; width: 70px;" />
            </div>
            <div style="display: flex; gap: 10px;">
              <span style="margin-right: 12px; font-size: large; width: fit-content;">Galho:</span>
              <input type="number" v-model="galho" style="width: 60px;" />
            </div>
            <div style="display: flex; gap: 10px;">
              <span> Min %: </span>
              <input name="minProbabilidade" type="number" v-model="minProbabilidade"
                style="height: 30px; width: 60px;" />
            </div>
            <div style="display: flex; gap: 10px;">
              <span> Max %: </span>
              <input name="maxProbabilidade" type="number" v-model="maxProbabilidade"
                style="height: 30px; width: 60px;" />
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
            <button @click="loadEstrategias" style="width: fit-content; ">Carregar</button>
          </div>
        </div>
        <div class="row">
          <MaterialProgress v-if="loading" color="success" :value="100" />
          <PadroesCores v-if="estrategias?.padroes" :padroes="estrategias?.padroes" :on-padrao-clicked="onPadraoSelecionado" />
        </div>
        <div class="row">
          <DoubleNumeroCor v-if="estrategias" :data="estrategias?.numero_cor_probabilidades" :on-roll-clicked="onPadraoSelecionado"/>
        </div>
        <div class="row">
          <PadraoEstrategiasMinutagem v-if="estrategias" :estrategias="estrategias?.minutagem" />
        </div>
      </Collapse>
      <div>
        <TabelaDouble :rolls="rolls" />
      </div>
    </div>
  </BaseLayout>
</template>
