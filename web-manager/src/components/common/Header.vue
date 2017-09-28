<template>
  <div>
    <div class="header">
      <div class="title">管理系统</div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="user-logo" src="../../../static/img/img.jpg">
            <span class="user-name">{{ username }}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: '用户名'
    }),
    computed: {
      username: function () {
        let username = localStorage.getItem('username')
        return username ? username : this.name
      }
    }
  }
</script>

<style scoped>
  .header{
    position: relative;
    width: 100%;
    height:70px;
    line-height: 70px;
    font-size: 22px;
    color: #fff;
  }
  .header .title{
    float: left;
    width: 250px;
    text-align: center;
  }
  .header .user-info{
    float: right;
    text-align: center;
    width: 180px;
    line-height: 70px;
  }
  .user-info .user-logo{
    width: 40px;
    height: 40px;
    position: absolute;

    top: 15px;
    border-radius: 50%;
  }
  .user-info .user-name{
    margin-left: 60px;
    color: #fff;
    font-size: 14px;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
