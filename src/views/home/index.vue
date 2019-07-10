<template>
    <div>
     <!-- 头部 -->
      <van-nav-bar
            title="首页"
          />
           <!-- /头部 -->
          <!-- 频道标签 -->
          <van-tabs class="channel-tabs" v-model="activeChannelIndex">
            <van-tab title="标签 1">
               <!-- 下拉刷新组件
            isLoading 控制下拉的loading状态
            refresh  下拉之后出发的事件
             -->
             <van-pull-refresh v-model="pullRefreshLoading" @refresh="onRefresh">
             <!--
               loading 控制加载更多的loading 状态
               finished 控制是否已经加载结束
               onload 事件会在滚动到底部区域的时候自动调用，每次onload他会自动让 loading 为 true
              -->
              <!-- 标签 -->
              <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                <!-- 列表中的内容 -->
                  <van-cell
                    v-for="item in list"
                    :key="item"
                    :title="item"
                  />
                </van-list>
                 </van-pull-refresh>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
            <van-tab title="标签 5">内容 5</van-tab>
            <van-tab title="标签 6">内容 6</van-tab>
            <van-tab title="标签 7">内容 7</van-tab>
            <van-tab title="标签 8">内容 8</van-tab>
          </van-tabs>
          <!-- /频道标签 -->
          <!-- 底部导航 -->
          <van-tabbar route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="wd">问答</van-tabbar-item>
            <van-tabbar-item icon="cashier-o" to="sp">视频</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="my">我的</van-tabbar-item>
          </van-tabbar>
            <!-- /底部导航 -->
    </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      activeChannelIndex: 0,
      list: [],
      loading: false,
      finished: false,
      pullRefreshLoading: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          // 所有数据加载完毕，设置finished为true
          this.finished = true
        }
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        this.pullRefreshLoading = false
      }, 500)
    }
  }
}
</script>

<style lang="less" scope>
.channel-tabs {
  margin-bottom: 100px;
}

// /deep/ 的作用（深度作用选择器）
// 注意：我们在页面上测量的是设备的像素，我们的样式规则转换是基于75 进行转换的，所以在这里写的都 乘以 2
.channel-tabs /deep/ .van-tabs__wrap {
  position: fixed;
  top: 92px;
}
.channel-tabs /deep/ .van-tabs__content {
  margin-top: 92px;
}
</style>
