<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i>表单</el-breadcrumb-item>
        <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      Element UI 自带上传组件
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    methods: {
      handlePreview: function (file,fileList) {
        console.log(file,fileList)
      },
      handleRemove: function (file) {
        console.log(file)
      }
    }
  }
</script>

<style>
  .pre-img{
    width:250px;
    height: 250px;
    margin-bottom: 20px;
  }
</style>
