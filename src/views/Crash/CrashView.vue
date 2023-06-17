<script setup>
import { ref, onMounted } from "vue";

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import ContagemCores from "./components/ContagemCores.vue"
import GraficoLinha from "./components/GraficoLinha.vue"
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialAlert from "@/components/MaterialAlert.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const media_intervalos = ref({})
const contagem_cores = ref({})
const qtd_velas = ref("200")
const loadClicked = ref(false)

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
<div style="width: 20%">
<label for="qtdVelas">
Quantidade de velas:
     <input 
name="qtdVelas"
    class="input-group-static"
    label="Quantidade de Velas"
    type="number" v-model="qtd_velas"
    /> 
</label>
 <button class="mt-2" @click="load">Load</button>
 <MaterialAlert v-if="loadClicked" class="mt-2" style="width: fit-content;" color="success" fontWeight="bold">
Atualizado com sucesso!
</MaterialAlert>
</div>

    <div style="display: flex;" class="mt-2">
      <MediaVelas :media_intervalos="media_intervalos" />
      <ContagemCores :contagem_cores = "contagem_cores" />
      <GraficoLinha :contagem_cores = "contagem_cores" />
    </div>
   
  </BaseLayout>
</template>
