<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i><span>表格</span></el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-table ref="multipleTable" :data="tableData" style="width: 100%" show-overflow-tooltip border>
      <el-table-column type="selection" width="70"></el-table-column>
      <el-table-column prop="date" label="录入日期" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <!--filter 筛选-->
      <el-table-column prop="tag" label="标签" width="120"
        :filters="[{text: '家',value:'家'},{text: '公司',value: '公司'}]"
        :filter-method="filterTag">
          <template scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
            </el-tag>
          </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handlerEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handlerDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1],tableData[2]])">切换第一行第二行的选中状态</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tableData: [{
        date: '2017-02-02',
        name: '科比',
        address: '山西省太原市小店区',
        tag: '家'
      }, {
        date: '2017-02-04',
        name: 'lady',
        address: '山西省太原市迎泽区',
        tag: '公司'
      }, {
        date: '2017-02-01',
        name: '乔丹',
        address: '山西省太原市杏花岭区',
        tag: '家'
      }, {
        date: '2017-02-03',
        name: '杜兰特',
        address: '山西省太原市小店区',
        tag: '公司'
      }]
    }),
    methods: {
      formatter: function (row,column) {
        return row.address
      },
      toggleSelection: function (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        }
      },
      filterTag: function (value,row) {
        return row.tag == value
      },
      handlerEdit: function (index,row) {
        this.$message('编辑第' + (index + 1) + '行')
      },
      handlerDelete: function (index,row) {
        this.$message.error('删除第' + (index + 1) + '行')
        this.tableData.splice(index,1)
      }
    }
  }
</script>

<style>

</style>
