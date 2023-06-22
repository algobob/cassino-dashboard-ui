<script setup>
import { ref, onMounted } from "vue";

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import PadraoEstrategias from "./components/PadraoEstrategias.vue"
import ContagemCores from "./components/ContagemCores.vue"
import GraficoLinha from "./components/GraficoLinha.vue"
import Clock from "./components/Clock.vue"
import MaterialAlert from "@/components/MaterialAlert.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const estrategias = ref({})
const contagem_cores = ref({})
const media_intervalos = ref({})
const qtd_velas = ref("200")
// const notification = inject('notification')

const load = () => {
  fetch('/creu/blaze/crash/dashboard/' + qtd_velas.value)
    .then(response => response.json())
    .then(data => {
      estrategias.value = data['estrategias']
      contagem_cores.value = data['contagem_cores']
      media_intervalos.value = data['media_intervalos']
      // notification.show('Hello World', {
      //     body: 'This is an example!'
      //   }, {})
    })
}

//hook
onMounted(() => {
  setNavPills();
  setInterval(() => {
    load()
  }, 60000)
  load();
});

</script>
<template>
  <BaseLayout title="Blaze - Crash">
    <div style="width: 30%; display:inline;">
      <label for="qtdVelas">
        Quantidade de velas:
        <input name="qtdVelas" class="input-group-static" label="Quantidade de Velas" type="number" v-model="qtd_velas" />
      </label>
      <button class="mt-2" @click="load">Load</button>
      <Clock />

      <!-- <MaterialAlert v-if="loadClicked" class="mt-2" style="width: fit-content;" color="success" fontWeight="bold">
   Atualizado com sucesso!
  </MaterialAlert> -->
    </div>

    <div style="display: flex;" class="mt-2">
      <PadraoEstrategias :estrategias="estrategias" />
      <MediaVelas :media_intervalos="media_intervalos" />
      <ContagemCores :contagem_cores="contagem_cores" />
      <!-- <GraficoLinha :contagem_cores = "contagem_cores" /> -->
    </div>

  </BaseLayout>
</template>
