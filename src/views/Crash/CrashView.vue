<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../layouts/sections/components/BaseLayout.vue";
import View from "../../layouts/sections/components/View.vue";

// Navbars page components
import NavbarDark from "../../layouts/sections/navigation/navbars/components/NavbarDark.vue";

// Navbars page components codes
import { navbarDarkCode } from "../../layouts/sections/navigation/navbars/components/codes.js";
import DefaultInfoCard from "@/examples/cards/infoCards/DefaultInfoCard.vue";


//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout title="Blaze - Crash">
    <div class="card" style="width: 30%;" >
      <div class="card-header">
        <h5 class="card-title">Média de velas</h5>
      </div>
      <div class="card-body">
        <div style="display: flex;">

        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">3X</h5>
            <p class="card-text"><mark>10min</mark></p>
          </div>
        </div>

        <div class="card" style="width: auto; margin: 0 10px;">
          <div class="card-body">
            <h5 class="card-title">5X</h5>
            <p class="card-text"><mark>10min</mark></p>
          </div>
        </div>

        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">10X</h5>
            <p class="card-text"><mark>10min</mark></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
