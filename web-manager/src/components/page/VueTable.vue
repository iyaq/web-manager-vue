<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item><i class="el-icon-menu"></i></el-breadcrumb-item>
        <el-breadcrumb-item>Vue 表格组件</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      vue-datasource：一个用于动态创建表格的vue.js服务端组件。
    </div>
      <server-datasource class="vue-datasource"
        source="/static/data.json"
        :columns="columns"
        :actions="actions"
        :limits="numarray"
        :translation="translation"
        :searching="search"
        :change="changePage">
      </server-datasource>
  </div>
</template>

<script>
  import { ServerDatasource } from 'vue-datasource'
  import axios from 'axios'

  export default {
    data: function () {
      const self = this
      return {
        information: {
          pagination: {},
          data: []
        },
        columns: [
          {
            name: 'Id',
            key: 'id'
          },
          {
            name: 'Name',
            key: 'name'
          },
          {
            name: 'email',
            key: 'email'
          },
          {
            name: 'company',
            key: 'company'
          }
        ],
        numarray: [3,6,9],
        translation: {
          limit: '显示',
          search: 'Search',
          placeholder_search: '请输入搜索内容',
          records_not_found: '没有结果',
          pagination: {
            show: 'Showing',
            to: 'to',
            of: 'of',
            entries: 'entries'
          }
        },
        actions: [
          {
            text: 'Click me', // Button label
            class: 'btn-primary',
            show(selectedRow) { // Event to define a condition to display the button with the selected row
              return true
            },
            event(e, row) {
              if (row == null){
                self.$message.error('未选中任何行')
              } else {
                self.$message('选中的行数' + row.row.id)
              }
            }
          }
        ],
        query: ''
      }
    },
    components: {
      ServerDatasource
    },
    computed: {

    },
    methods: {
      search: function () {

      },
      changePage: function () {
        this.$message('')
      }
    },
    mounted: function () {
      const self = this
      this.$nextTick(function () {
        axios.get('/static/data.json').then(res => {
          self.information = res.data
        })
      })
    }
  }
</script>

<style src="../../../static/css/datasource.css"></style>
