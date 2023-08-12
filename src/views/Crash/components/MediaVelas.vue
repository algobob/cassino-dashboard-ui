<script setup>
const props = defineProps(['media_intervalos'])

console.log(props.media_intervalos)
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Média de velas</h5>
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style="width: fit-content; height: fit-content;">
              <div class="card-body">
                <h5 class="card-title">3X</h5>
                <p class="card-text"><mark>{{ media_intervalos['3x'] }}</mark></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: fit-content; height: fit-content;">
              <div class="card-body">
                <h5 class="card-title">5X</h5>
                <p class="card-text"><mark>{{ media_intervalos['5x'] }}</mark></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: fit-content; height: fit-content">
              <div class="card-body">
                <h5 class="card-title">10X</h5>
                <p class="card-text"><mark>{{ media_intervalos['10x'] }}</mark></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: fit-content; height: fit-content">
              <div class="card-body">
                <h5 class="card-title">100X</h5>
                <p class="card-text"><mark>{{ media_intervalos['100x'] }}</mark></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.row > * {
    margin: 2%;
}
</style>
