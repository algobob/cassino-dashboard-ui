<script setup>
const props = defineProps(['balance'])
console.log(props.balance)

</script>
<style>
.caixa {
  position: fixed;
  top: 15%;
  right: 2%;
}

.credit {
  color: green;
  font-weight: 500;
  font-size: 25px;
}

.debt {
  color: red;
  font-weight: 500;
  font-size: 25px;
}

.zero {
  color: gray;
  font-weight: 500;
  font-size: 25px;
}

.square {
  height: 30px;
  width: 30px;
  border-style: solid;
  border-color: black;
}
</style>
<template>
  <div class="container d-flex caixa" style="justify-content: right;">
    <div class="card p-3">
      <div class="card-bottom pt-3 px-3 mb-2">
        <div class="d-flex flex-row justify-content-between text-align-center">
          <div class="d-flex flex-column">
            <h4><mark>Caixa $</mark></h4>
            <div style="display: inline-flex; gap: 10px;">
              <div class="square" style="background-color: red;"></div>
              <p :class="{ 'credit': balance['red'] > 0, 'debt': balance['red'] < 0, 'zero': balance['red'] == 0 || !balance['red'] }">R$ {{ balance['red'] || 0 }}</p>
            </div>
            <div style="display: inline-flex; gap: 10px;">
              <div class="square" style="background-color: white;"></div>
              <p :class="{ 'credit': balance['white'] > 0, 'debt': balance['white'] < 0, 'zero': balance['white'] == 0 || !balance['white'] }">R$ {{ balance['white'] || 0 }}</p>
            </div>
            <div style="display: inline-flex; gap: 10px;">
              <div class="square" style="background-color: black;"></div>
              <p :class="{ 'credit': balance['black'] > 0, 'debt': balance['black'] < 0, 'zero': balance['black'] == 0 || !balance['black'] }">R$ {{ balance['black'] || 0 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
