<script setup>
import { ref, onMounted } from "vue";

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import ContagemCores from "./components/ContagemCores.vue"
import GraficoLinha from "./components/GraficoLinha.vue"
import MaterialInput from "@/components/MaterialInput.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const media_intervalos = ref({})
const contagem_cores = ref({})
const qtd_velas = ref(200)

const load = () => {
  fetch('/creu/blaze/crash/media/velas?max_velas='+qtd_velas.value)
  .then(response => response.json())
  .then(data => media_intervalos.value = data)

  fetch('/creu/blaze/crash/contagemCores?max_velas='+qtd_velas.value)
  .then(response => response.json())
  .then(data => contagem_cores.value = data)
}

//hook
onMounted(() => {
  setNavPills();
  load();
});

</script>
<template>
  <BaseLayout title="Blaze - Crash">
   <div style="display: flex; width: max-content">
     <MaterialInput
    class="input-group-static"
    label="Quantidade de Velas"
    type="number" :value="qtd_velas"
    placeholder="200" @blur="load"
  />
   </div>
    <div style="display: flex;" class="mt-2">
      <MediaVelas :media_intervalos="media_intervalos" />
      <ContagemCores :contagem_cores = "contagem_cores" />
      <GraficoLinha :contagem_cores = "contagem_cores" />
    </div>
   
  </BaseLayout>
</template>
