<template>
  <div class="example">
    <VueApexCharts
      width="800"
      height="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>   
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import * as _ from 'lodash'

const props = defineProps(['velas'])


const groupBy = (velas) => {
  const result = {}
  velas.forEach( v => {
    const d = new Date(v.created) 
    const minutesBase = Math.floor(d.getMinutes() / 5) * 5;
    d.setMinutes(minutesBase)
    d.setSeconds(0)

    const key = d.toISOString()

    if (key in result) {      
      result[key].push(v.vela)
    } else {      
      result[key] = [v.vela]
    }    
  })

  console.log('velasGroupedBy5min ', result)

  for (const [key, value] of Object.entries(result)) {
      result[key] = _.mean(value)
    } 
  
  return result
}

const velasGroupedBy5min = groupBy(props?.velas)

// const dataSeries = props?.velas?.map( v => [v.created, v.vela ])
const dataSeries = []
for (const [key, value] of Object.entries(velasGroupedBy5min)) {
  dataSeries.push([key, value.toFixed(2)])
}  
console.log('dataSeries ', dataSeries)


let chartOptions = ref({
  chart: {
    type: "line",
    height: 350,
  },
  title: {
    text: "Grafico de linha - Velas",
    align: "left",
  }, 
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    max: 20
  },
});

const series = ref([
  {
    data: dataSeries
  },
]);

</script>
