<!--  -->
<template>
  <div>
    <!-- 引入字体图标库 -->
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_2085738_tqcf9kw0x1.css"
    />
    <router-link to="/profile"
      ><span><i class="iconfont icon-xiangzuo-01"></i></span>
    </router-link>

    <!-- //登录注册 -->
    <div>
      <section class="loginContainer">
        <div class="loginInner">
          <div class="login_header">
            <h2 class="login_logo">点一个外卖</h2>
            <div class="login_header_title">
              <a
                href="javascript:;"
                :class="longinway ? 'on' : ''"
                @click="longinway = true"
                >短信登录</a
              >
              <a
                href="javascript:;"
                :class="longinway ? '' : 'on'"
                @click="longinway = false"
                >密码登录</a
              >
            </div>
          </div>
          <div class="login_content">
            <form>
              <div :class="longinway ? 'on' : ''">
                <section class="login_message">
                  <input
                    type="tel"
                    maxlength="11"
                    placeholder="手机号"
                    v-model="phone"
                  />
                  <button
                    :disabled="
                      (!isphone && computedTime == 0) || computedTime > 0
                    "
                    class="get_verification"
                    :class="{ curr: isphone && computedTime == 0 }"
                    @click="getVerifCode"
                  >
                    {{
                      computedTime > 0 ? `${computedTime}s已发送` : "获取验证码"
                    }}
                  </button>
                </section>
                <section class="login_verification">
                  <input
                    type="tel"
                    maxlength="8"
                    placeholder="验证码"
                    v-model="code"
                  />
                </section>
                <section class="login_hint">
                  温馨提示：未注册美团外卖帐号的手机号，登录时将自动注册，且代表已同意
                  <a href="javascript:;">《用户服务协议》</a>
                </section>
              </div>
              <div :class="longinway ? '' : 'on'">
                <section>
                  <section class="login_message">
                    <input
                      type="tel"
                      maxlength="11"
                      placeholder="手机/邮箱/用户名"
                      v-model="userName"
                    />
                  </section>
                  <section class="login_verification">
                    <input
                      :type="showhide ? 'tel' : 'password'"
                      maxlength="8"
                      placeholder="密码"
                      v-model="userPwd"
                    />
                    <div
                      class="switch_button"
                      :class="showhide ? 'on' : 'off'"
                      @click="showhide = !showhide"
                    >
                      <div class="switch_circle"></div>
                      <span class="switch_text">...</span>
                    </div>
                  </section>
                  <section class="login_message">
                    <input
                      type="text"
                      maxlength="11"
                      placeholder="验证码"
                      v-model="imgCaptcha"
                    />
                    <img
                      class="get_verification"
                      :src="imgCaptchaSrc"
                      alt="captcha"
                      @click="getNew"
                    />
                  </section>
                </section>
              </div>
              <button class="login_submit" @click="login">登录</button>
            </form>
            <a href="javascript:;" class="about_us">关于我们</a>
          </div>
          <a href="javascript:" class="go_back">
            <i class="iconfont icon-jiantou2"></i>
          </a>
        </div>
        <!-- 弹出框 -->
        <AlerTip
          v-if="isShowAlert"
          :alertText="alertText"
          @closeAlert="closeAlert"
        ></AlerTip>
      </section>
    </div>
  </div>
</template>

<script>
// 引入
// import HeaderTop from "../../components/HeaderTop/HeaderTop";
import AlerTip from "../../components/AlertTip/AlertTip";
import { reqPwdLogin } from "../../api";
export default {
  components: {
    // HeaderTop,
    AlerTip,
  },
  data() {
    return {
      longinway: true, //登录方式
      phone: "", //电话号码
      computedTime: 0, //倒计时
      showhide: false, //密码显示方式
      isShowAlert: false, //弹框
      alertText: "", //弹框提示内容
      // input
      code: "", //短信验证码
      userName: "", //用户名
      userPwd: "", //密码
      imgCaptcha: "", //图片验证码
      imgCaptchaSrc: "", //图片刷新路径
    };
  },
  methods: {
 
   // 弹出窗口
     showAlert() {
       this.isShowAlert = true;
    },
     closeAlert() {
      this.isShowAlert = false;
    },
    // 表单验证
    async login() {
      // console.log(1);
      let result;
 
      if (this.longinway) {
        if (!this.isphone) {
          // ShowAlert("手机号码不正确");
        this.alertText='手机号码不正确'
        this.isShowAlert=true
          return;
        } 
      } 
      else if (!this.userName) {
        this.alertText='用户名不对'
        this.isShowAlert=true
        return;
      } else if (!this.userPwd) {
        this.alertText='密码不对'
        this.isShowAlert=true

        return;
      } else if (this.imgCaptcha == "") {
        this.alertText='图片验证码不对'
        this.isShowAlert=true
        return;
      }
      result = await reqPwdLogin({
        name: this.userName,
        pwd: this.userPwd,
        captcha: this.imgCaptcha,
      });
      // 根据结果数据处理
      if (result.code === 0) {
       const user = result.data
        // 成功
        // console.log(user);
        // 去个人中心界面
        this.$store.dispatch('recordUser',user)//存储到vuex
        
        this.$router.replace("/profile");
      } else {
        // 显示警告提示
        this.getNew() //刷新验证码
        this.isShowAlert=true
        const msg = result.msg;
        this.alertText=msg
        console.log(msg);
      }
    },

      //手机验证倒计时  computedTime每秒减一 0停止
    getVerifCode() {
      this.computedTime = 30;
      let timerID = setInterval(() => {
        this.computedTime--;
        // 如果到0 清除定时器
        if (this.computedTime == 0) {
          clearInterval(timerID); //清除了timerID这个定时器
        }
      }, 1000);
    },
    // 图片刷新
    getNew() {
      this.imgCaptchaSrc = `http://localhost:4000/captcha?timeID=${new Date()}`;
    },
  },
  mounted() {
    //生命周期
    this.imgCaptchaSrc = "http://localhost:4000/captcha";
  },
  computed: {
    //监听计算结果
    isphone() {
      //判断手机是否 合法
      return /^[1]+[3,8,5,7]+\d{9}/gi.test(this.phone);
    },
  },

 
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: $dColor;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: $dColor;
            font-weight: 700;
            border-bottom: 2px solid $dColor;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid $dColor;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.curr {
                color: #000000;
                border: 1px solid #ddd;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: $dColor;

                .switch_circle {
                  transform: translateX(27px);
                }
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: $dColor;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 38px;
          margin-top: 30px;
          border-radius: 4px;
          background: $dColor;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 38px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>