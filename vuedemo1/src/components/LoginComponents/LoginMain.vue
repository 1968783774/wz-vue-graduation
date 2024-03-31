<script>
export default {
  name: "LoginMain",
  data() {
    return {
      isLogin:true,
      isAgree:false,
      username: null,
      password: null
    };
  },
  methods:{
    login(){
      this.$axios.post(this.$httpUrl + '/login/login',
          {
            username:this.username,
            password:this.password
          })
          .then(res => {
            if (res.data.code===200&&res.data.data===true) {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              this.$router.replace('/home')
            }
            else if(res.data.code===200&&res.data.data===false){
              this.$message({
                message: '请输入正确的账号或密码',
                type: 'error'
              });
            }
            else {
              this.$message({
                message: '系统出错，请联系管理员',
                type: 'error'
              });
            }
          })
    },
    loginOrRegister() {
      this.isLogin=!this.isLogin
    },
    agree(){
      this.isAgree=true
    },
    register(){
      if (this.isAgree===true){
        this.$message({
          message: '注册成功',
          type: 'success'
        });
        this.loginOrRegister()
      }else {
        this.$message({
          message: '注册失败',
          type: 'warning'
        });
      }
    },
    forgetPassword(){
    },
  }
}
</script>

<template>
  <div class = "interface">
    <div>
      <el-button class="pictrue"></el-button>
    </div>
    <div class="el-form2">
      <div>
        <el-form v-if="isLogin">
          <el-form-item>
            <el-input type="text" auto-complete="off" placeholder="请输入用户名" v-model="username" style="width: 400px">
              <template slot="prepend"><i style="font-size: 20px" class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="text"  auto-complete="off" placeholder="请输入密码" v-model="password" style="width: 400px; margin-top: 20px">
              <template slot="prepend"><i style="font-size:20px;height: 20px" class="el-icon-key"></i></template>
            </el-input>
          </el-form-item>
          <el-link style="line-height: 20px;margin-top: 1px;margin-left: 330px" type="primary">忘记密码？</el-link>
          <el-form-item>
            <el-button style="width:400px; height: 40px; margin-top: 15px; font-size: 15px" type="primary" @click="login">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button style="width:400px; height: 40px; margin-top: 10px; font-size: 15px" type="primary" plain>其他方式登录</el-button>
          </el-form-item>
          <div class="word1">
            没有账号？ <el-link style="font-size: 15px" type="primary" @click="loginOrRegister">免费注册</el-link>
          </div>
        </el-form>
        <el-form v-else>
          <el-form-item>
            <el-input type="text" auto-complete="off" placeholder="请输入用户名" style="width: 400px">
              <template slot="prepend"><i style="font-size: 20px" class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="text"  auto-complete="off" placeholder="请输入密码" style="width: 400px; margin-top: 20px">
              <template slot="prepend"><i style="font-size:20px;height: 20px" class="el-icon-key"></i></template>
            </el-input>
          </el-form-item>
          <el-checkbox v-model="isAgree" @click="agree">我已同意。。。。。</el-checkbox>
          <el-form-item>
            <el-button style="width:400px; height: 40px; margin-top: 15px; font-size: 15px" type="primary" @click="register">注册</el-button>
          </el-form-item>
          <div class="word1">
            已有账号？ <el-link style="font-size: 15px" type="primary" @click="loginOrRegister">立即登录</el-link>
          </div>
        </el-form>
      </div>

   </div>
  </div>
</template>

<style scoped>
.interface{
  display: flex;
  justify-content: center;
  align-content: center;
}
.pictrue{
  width: 900px;
  height: 600px;
  margin-top: 50px;
  margin-left: 100px;
  border-radius: 30px;
  background-image: url("../../assets/background.png");
  background-size: cover;
}
.el-form2{
  background-color: white;
  height: 600px;
  width: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 子元素垂直堆叠 */
}
.word1{
  font-size: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: center; /* 水平居中 */
}
</style>