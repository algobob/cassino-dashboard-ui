<script setup>
const props = defineProps(['red', 'black', 'white'])
console.log(props)
</script>
<style>
.credit {
  color: green;
  font-weight: 500;
  font-size: 126%;
}

.debt {
  color: red;
  font-weight: 500;
  font-size: 126%;
}

.zero {
  color: gray;
  font-weight: 500;
  font-size: 126%;
}

.square {
  height: 30px;
  width: 30px;
  border-style: solid;
  border-color: black;
}
</style>
<template>
  <div class="container d-flex" >
    <div class="card p-3">
      <div class="card-bottom pt-3 px-3 mb-2">
        <div class="d-flex flex-row justify-content-between text-align-center">
          <div class="d-flex flex-column">
            <h4><mark>Media / hora</mark></h4>
            <div style="display: inline-flex; gap: 10px;" v-show="props.red">
              <div class="square" style="background-color: red;"></div>
              <p class="zero">{{ props.red }}</p>
            </div>
            <div style="display: inline-flex; gap: 10px;">
              <div class="square" style="background-color: white;"></div>
              <p class="zero">{{ props.white }}</p>
            </div>
            <div style="display: inline-flex; gap: 10px;">
              <div class="square" style="background-color: black;"></div>
              <p class="zero">{{ props.black }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
