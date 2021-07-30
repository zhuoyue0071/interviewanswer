<template>
  <div>
    <!-- <h1>{{ result }}</h1> -->
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

const getData = function (min, max) {
  let arr = [];
  for (let i = 0; i < 200; i++) {
      let added =0;
      if(arr.length!== 0){
          added = arr[arr.length-1]
      }
    arr.push((Math.random() * (max - min) + min).toFixed(3)*1);
  }
  return arr;
};
export default {
  name: "four",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: "大坝土压力计E2-11、E2-12过程线图",
          style: { fontWeight: "600" },
        },
        xAxis: {
            type: 'datetime',
			tickInterval: 7 * 24 * 3600 * 1000, // one week
			labels: {
				format: '{value: %Y/%m/%d}',
				align: 'right',
				rotation: -30
			}
		},
        yAxis: {
            title:{
                text:'应力（MPa）',
            },
            allowDecimals: true
        },
        legend: { 
            verticalAlign: 'top', 
            enabled:true
        }, 
        series: [
          {
              name: 'E2-11应力',
              pointInterval: 4*24 * 3600 * 1000,
                pointStart: Date.UTC(2015, 3, 21),
            data: getData(0,0.42), // sample data
          },
          {
              name: 'E2-12应力',
               pointInterval: 4*24 * 3600 * 1000,
                pointStart: Date.UTC(2015, 3, 21),
            data: getData(0,0.42), // sample data
          },
          {
              name: 'E2-13应力',
               pointInterval: 4*24 * 3600 * 1000,
                pointStart: Date.UTC(2015, 3, 21),
            data: getData(0,0.42), // sample data
          },
        ],
      },
    };
  },
  created() {
      
  },
  mounted() {
  },
  method: {},
};
</script>

<style>
</style>