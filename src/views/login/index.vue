<template>
    <div id="app">
      <!-- 头部 -->
        <van-nav-bar
            title="标题"
          />
          <!-- 表单 -->
          <form>
            <van-cell-group>
                <van-field
                  v-model="user.mobile"
                  required
                  clearable
                  label="手机号"
                  placeholder="请输入手机号"
                />
               <van-cell-group>
                  <van-field
                    v-model="user.code"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                  >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                  </van-field>
                </van-cell-group>
              </van-cell-group>
              <div class="login-btn-box">
                <van-button
                class="login-btn"
                type="info"
                :loading="loginLoading"
                loading-text="登录中..."
                @click.prevent = "handleLogin"
                >登录</van-button>
              </div>
          </form>
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'App',
  data () {
    return {
      user: {// 提交登录的表单数据
        mobile: '18531151201',
        code: '123456'
      },
      loginLoading: false // 控制登录按钮的 loading 状态
    }
  },
  methods: {
    async handleLogin () {
      this.loginLoading = true
      try {
        // 登陆成功后要做的事情
        const data = await login(this.user)
        // 登录成功后，提交mutation完成对状态的修改
        this.$store.commit('setUser', data)
        /**
         * 这里先简单粗暴的跳转到首页
         * 真实的业务要处理成跳转之前过来的页面
         */
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登录失败', err)
      }
      this.loginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn-box {
  padding: 32px;
  .login-btn {
    width: 100%;
  }
}
</style>
