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
        :rules="rules2"
        ref="registerFrom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item class="rel" label="用户名" prop="userName">
          <el-input type="text" v-model="registerFrom.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="rel" label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="registerFrom.passWord"
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

        <el-form-item class="rel" label="确认密码" prop="rePassWord">
          <el-input type="password" v-model="registerFrom.rePassWord" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerFrom')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    var validatorUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerFrom.passWord !== "") {
          this.$refs.registerFrom.validateField("passWord");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerFrom.rePassWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerFrom: {
        userName: "",
        passWord: "",
        rePassWord: ""
      },
      strengthClass: "",
      rules2: {
        userName: [{ validator: validatorUser, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }],
        rePassWord: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            api.getRegister({
                params:this.registerFrom
            }).then(res=>{
                if(res.data.status == 'success'){
                    this.router.push({name:'index'})
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
    input() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /(_)+/g;
      var strongth =
        this.registerFrom.passWord.match(reg) &&
        this.registerFrom.passWord.match(reg) &&
        this.registerFrom.passWord.match(reg);
      if (
        this.registerFrom.passWord.length > 12 ||
        (this.registerFrom.passWord.length >= 6 && strongth)
      ) {
        this.strengthClass = "strong";
      } else if (this.registerFrom.passWord.length < 6) {
        this.strengthClass = "week";
      } else if (this.registerFrom.passWord === "") {
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

