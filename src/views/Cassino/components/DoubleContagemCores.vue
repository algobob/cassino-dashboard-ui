<script setup>
import whiteroll from "@/assets/img/white-roll.svg";

const props = defineProps(['contagem_cores'])
console.log(props.contagem_cores)

</script>
<style scoped>
.square {
  height: 50px;
  width: 50px;
  border-style: solid;
  border-color: black;  
}

.black {
  background-color: black;
}
.white {
  background-color: white;
}
.red {
  background-color: red;
}
</style>

<template>
  <div class="card" style="width: auto; margin: 0 10px;">
    <div class="card-header">
      <h5 class="card-title">Contagem de cores</h5>
    </div>
    <div class="card-body">
      <div style="display: flex;">

        <div class="card" style="width: auto;">
          <div class="card-body">
            <h5 class="card-title">
              <div class="square black"></div>
            </h5>
            <p class="card-text"><mark>{{ contagem_cores.qtdPreta }} ({{ contagem_cores.percentagePreta }}) Pretos</mark></p>
          </div>
        </div>

        <div class="card" style="width: auto; margin: 0 10px;">
          <div class="card-body">
            <h5 class="card-title">
              <div class="square red"></div>
            </h5>
            <p class="card-text"><mark>{{ contagem_cores.qtdVermelha }} ({{ contagem_cores.percentageVermelha }}) Vermelhas</mark></p>
          </div>
        </div>
        <div class="card" style="width: auto; margin: 0 10px;">
          <div class="card-body">
            <h5 class="card-title">
              <div class="square white"></div>
            </h5>
            <p class="card-text"><mark>{{ contagem_cores.qtdBranca }} ({{ contagem_cores.percentageBranca }}) Brancas</mark></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
