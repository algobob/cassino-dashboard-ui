<script setup>
import { ref, onMounted } from "vue";

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

import MediaVelas from "./components/MediaVelas.vue"
import ContagemCores from "./components/ContagemCores.vue"
import MaterialInput from "@/components/MaterialInput.vue";


//nav-pills
import setNavPills from "@/assets/js/nav-pills";

const media_intervalos = ref({})
const contagem_cores = ref({})

//hook
onMounted(() => {
  setNavPills();

  fetch('/creu/blaze/crash/media/velas')
  .then(response => response.json())
  .then(data => media_intervalos.value = data)

  fetch('/creu/blaze/crash/contagemCores')
  .then(response => response.json())
  .then(data => contagem_cores.value = data)
});

</script>
<template>
  <BaseLayout title="Blaze - Crash">
    <MaterialInput
   class="input-group-static"
   label="Quantidade de Velas"
   type="number"
   placeholder="200"
 />
    <div style="display: flex;" class="mt-2">
      <MediaVelas :media_intervalos="media_intervalos" />
      <ContagemCores :contagem_cores = "contagem_cores" />
    </div>
  </BaseLayout>
</template>
