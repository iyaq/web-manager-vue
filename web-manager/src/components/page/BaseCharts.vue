<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-picture"></i><span>图表</span></el-breadcrumb-item>
        <el-breadcrumb-item> 基础图标</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
      访问地址：<a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
    </div>
    <div class="echarts">
      <charts :option="line" :loading="loading" @ready="onReady" @click="onClick"></charts>
      <button @click="doRandom">Random</button>
      <charts :option="bar"></charts>
      <charts :option="pie"></charts>
    </div>
  </div>
</template>

<script>
  import IECharts from 'vue-echarts-v3'
  export default {
    data: function () {
      return {
        loading: false,
        line: {
          color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
          title: {
            text: '曲线图'
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis:{},
          series: [
            {
              name: "销量",
              type: "line",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        },
        bar: {
          color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
          title: {
            text: '柱状图'
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis:{},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        },
        pie: {
          color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
          title : {
            text: '饼状图',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
          },
          series : [
            {
              name: '销量',
              type: 'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'衬衫'},
                {value:310, name:'羊毛衫'},
                {value:234, name:'雪纺衫'},
                {value:135, name:'裤子'},
                {value:548, name:'高跟鞋'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    },
    components: {
      'charts': IECharts
    },
    methods: {
      onReady: function (instance) {
        console.log(instance)
      },
      onClick: function (event,instance,echarts) {
        console.log(arguments)
      },
      doRandom: function () {
        const that = this;
        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.bar.series[0].data = data;
      }
    }
  }
</script>

<style scoped>
  .echarts {
    float: left;
    width: 500px;
    height: 400px;
  }
</style>
