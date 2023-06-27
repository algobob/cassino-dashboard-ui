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

.quadradinho:hover {
  border: 2px solid blue;
  transition: 0.3s;
}

.quadradinhoPreto:hover {
  border: 2px solid red;
  transition: 0.3s;
}
</style>
<script setup>
import { ref } from "vue";

const props = defineProps({
  velaObj: Object
})

const upHere = ref(false)

</script>
<template>
  <div style="display: flex; justify-content: center; align-items: center;flex-direction: column;">
      <div :class="{quadradinhoPreto: velaObj?.vela < 2,
        quadradinho: velaObj?.vela >= 2}" @mouseover="upHere = true" @mouseleave="upHere = false">
        <span>
          {{ velaObj?.vela }}x
        </span>
      </div>
        <span v-show="upHere">{{ velaObj?.created.split(" ")[4] }}</span>
  </div>
</template>
