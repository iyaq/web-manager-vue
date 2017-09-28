<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-picture"></i><span>图表</span></el-breadcrumb-item>
        <el-breadcrumb-item> 混合图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mix-charts">
      <IECharts :option="mix"></IECharts>
    </div>
  </div>
</template>

<script>
  import IECharts from 'vue-echarts-v3'
  export default {
    data: function () {
      return {
        mix:{
          color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
          legend: {
            data:['步步高','小天才','imoo']
          },
          xAxis: {
            data: ['周一','周二','周三','周四','周五','周末']
          },
          yAxis:{},
          series: [
            {
              name: "步步高",
              type: "line",
              data: [15, 20, 26, 30, 40, 27]
            },
            {
              name: "小天才",
              type: "bar",
              data: [5, 30, 36, 10, 34, 20]
            },
            {
              name: "imoo",
              type: "bar",
              data: [35, 40, 30, 50, 60, 40]
            }
          ]
        }
      }
    },
    components: {
      IECharts
    }
  }
</script>

<style scoped>
  .mix-charts{
    width: 900px;
    height: 600px;
  }
</style>
