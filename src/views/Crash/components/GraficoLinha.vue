<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [ '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x+'],
        datasets: [ { data: [1.6, 652.62, 1.39, 2.59, 1.43, 1.61, 4.15, 1.28, 3.16, 1.2, 9.12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>