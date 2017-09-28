<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="0px" class="demo-rulesForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <p class="tip">tips: 账号密码为任意</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true,message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true,message: '请输入密码', trigger: 'blur' }
        ]
      }
    }),
    methods: {
      submitForm: function (formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('username',self.ruleForm.username)
            self.$router.push('/readme')
            console.log('登录成功')
          } else {
            console.log('error submit')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-wrap{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .ms-title{
    position: absolute;
    top: 20%;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }
  .ms-login{
    position: absolute;
    top: 35%;
    left: 50%; margin-left: -180px;
    width:300px;
    height:160px;
    border-radius: 5px;
    padding: 35px;
    background-color: #fff;
  }
  .login-btn button{
    text-align: center;
    width: 100%;
    height: 36px;
  }
  .tip{
    font-size:12px;line-height:30px;color:#999;
  }
</style>
