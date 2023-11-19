<style scoped>
.quadradinho {
  width: 54px;
  height: 44px;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  background-color: #4cd964;
  margin: 4px 4px 0 4px;
  transition: 0.3s;  
}

.quadradinhoPreto {
  width: 54px;
  height: 44px;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: black;
  margin: 4px 4px 0 4px;
  transition: 0.3s;  
}

.quadradinho span {
  font-weight: 600;
  color: black;
  line-break: anywhere;
  font-size: 13px;
  text-align: center;

}

.quadradinhoPreto span {
  font-weight: 600;
  color: white;
  line-break: anywhere;
  font-size: 13px;
  text-align: center;
}

.hora {
  font-size: 13px;
  font-weight: 800;
}

</style>
<script setup>
import { ref } from "vue";

const props = defineProps({
  vela: {
    type: Number,
    default: null
  }
  ,
  createdAt: Number,
})

console.log('vela = ', props.vela)
</script>
<template>
  <div style="display: flex; justify-content: center; align-items: center;flex-direction: column;" @click="$emit('clicked', vela)">
      <div :class="{quadradinhoPreto: vela < 2,
        quadradinho: vela >= 2}">
        <span v-if="vela != null">
          {{ vela }}x
        </span>
      </div>
        <span v-if="createdAt" class="hora">{{ new Date(createdAt*1000).toLocaleTimeString('pt-BR') }}</span>
  </div>
</template>
