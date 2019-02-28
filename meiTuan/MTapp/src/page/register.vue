<!--注册页面-->
<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href class="site-logo"></a>
        <div class="login">
          <span>已有账号</span>
          <router-link :to="{name:'login'}" class="login-reg">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerFrom"
        status-icon
        :rules="rules"
        ref="registerFrom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item class="rel" label="用户名" prop="userName">
          <el-input type="text" v-model="registerFrom.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="rel" label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerFrom.password"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="form-field">
            <div class="pw-strength">
              <div :class="['bar',strengthClass]"></div>
              <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span>抢</span>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="rel" label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerFrom.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-register" type="primary" @click="submitForm('registerFrom')">同意以下协议并注册</el-button>
           <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
       <p class="copyright">
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
    </p>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length <= 4 && value.length >= 16) {
        callback(new Error("必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerFrom.rePassword !== "") {
          this.$refs.registerFrom.validateField("rePassword");//***
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.registerFrom.password) {//***
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerFrom: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      // ****
      rules: {
        userName: [{ validator: validateUser, trigger: "blur",type:"string"}],
        pass: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登陆二次验证
    submitForm(formName) {
      console.log(this.$refs);
      this.$refs[formName].validate(valid => {
        if (valid) {
            api.getRegister({
                params:this.registerFrom
            }).then(res=>{
                if(res.data.status == 'success'){
                    this.router.push({name:'index'})
                    this.$store.commit('setUserName',this.userName)
                }else{
                    alter('注册失败')
                }
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 密码等级验证
    input() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /(_)+/g;
      var strongth =
        this.registerFrom.password.match(reg) && this.registerFrom.password.match(reg) && this.registerFrom.password.match(reg);
      if (
        this.registerFrom.password.length > 12 || (this.registerFrom.password.length >= 6 && strongth)
      ) {
        this.strengthClass = "strong";
      } else if (this.registerFrom.password.length < 6) {
        this.strengthClass = "week";
      } else if (this.registerFrom.password === "") {
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>

<style lang = scss>
@import "@/assets/css/register/index.scss";
</style>

