<template>
  <div class='c-footer'>
    <ul>
        <router-link tag="li" to="/" class="cf-home">
          <i class="iconfont icon-SSS"></i>
            首页
        </router-link>
        <router-link to="/discover" tag="li" class="cf-sort">
          <i class="iconfont icon-icon-test"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/order" tag="li" class="cf-order">
          <i class="iconfont icon-dingdan"></i>
            <span>订单</span>
        </router-link>
        <router-link to="/profile" tag="li" class="cf-me">
          <i class="iconfont icon-xiazai4"></i>
            <span>我的</span>
        </router-link>
    </ul>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '@/style/common/px2rem.scss';

  .c-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    color:#b1b1b4;
    font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    ul{
      display: flex;
      height: px2rem(50);
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: px2rem(12);
        i{
          font-size: px2rem(18);
        }
        span{
          color: #b1b1b4;
          margin-top: px2rem(4); 
        }
      }
    }

  }
</style>