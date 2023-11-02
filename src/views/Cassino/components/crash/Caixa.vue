<script setup>
const props = defineProps(['balance'])
console.log(props.balance)

</script>
<style>
.caixa {
  position: fixed;
  top: 15%;
  right: 1%;
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

</style>
<template>
  <div class="container d-flex">
  <div class="card p-3">
    <div class="card-bottom pt-3 px-3 mb-2">
      <div class="d-flex flex-row justify-content-between text-align-center">
        <div class="d-flex flex-column"><h4><mark>Caixa $</mark></h4>
         <p :class="{ 'credit': balance > 0, 'debt': balance < 0, 'zero': balance == 0 }">R$ {{ balance }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
