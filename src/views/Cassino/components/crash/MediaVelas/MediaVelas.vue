<script setup>
import MediaVela from "./MediaVela.vue"

const props = defineProps(['media_velas'])
</script>
<template>
  <div class="card" v-if="media_velas">
    <div class="card-header">
      <h5 class="card-title">Média de velas</h5>
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row">
            <MediaVela vela="2X" :data="media_velas['2x']" />
            <MediaVela vela="3X" :data="media_velas['3x']" />
            <MediaVela vela="5X" :data="media_velas['5x']" />
            <MediaVela vela="10X" :data="media_velas['10x']" />
            <MediaVela vela="100X" :data="media_velas['100x']" />
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
