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
                <van-button class="login-btn" type="info">登录</van-button>
              </div>
          </form>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
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
