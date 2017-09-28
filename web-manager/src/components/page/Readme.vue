<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i><span>简述</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="ms-doc">
      <h3>README.md</h3>
      <article>
        <h1>manage-system</h1>
        <h4>框架简介:</h4>
        <p> 基于 vue.js2.x + Element UI 开发</p>
        <h4>功能概述:</h4>
        <br>
        <el-checkbox disabled checked>Element UI</el-checkbox>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({})
  }
</script>

<style scoped>
  .ms-doc{
    width: 100%;
    max-width: 980px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
  /*README.md*/
  .ms-doc h3{
    padding: 9px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    background-color: #f5f5f5;
    border: 1px solid #d8d8d8;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }
  article{
    padding: 44px;
    word-wrap: break-word;
    border: 1px solid #d8d8d8;
    border-radius: 0 0 5px 5px;
  }
  /*title*/
  article h1{
    font-size: 32px;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  /*框架介绍*/
  article h4 {
    margin-top: 30px;
  }
  /*内容*/
  article p {
    margin-top: 20px;
  }

</style>
