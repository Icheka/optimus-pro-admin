<template>
  <canvas id="bar" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Chart from 'chart.js'

@Component
export default class BarChart extends Vue {
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({
    default: () => {
      return Chart.defaults.bar;
    }
  })
  readonly options: object | undefined

  mounted() {
      setTimeout(() => {
            this.createChart({
                datasets: [
                    {
                    data: this.data,
                    backgroundColor: this.colors
                    }
                ],
                labels: this.labels
            });
      }, 4000);
  }

  createChart(chartData: object) {
    const canvas = document.getElementById('bar') as HTMLCanvasElement
    const options = {
      type: 'bar',
      data: chartData,
      options: this.options
    }
    new Chart(canvas, options)
  }
}
</script>