<template>
  <div class="profile">
    <div class="profile-user"></div>
    <div class="profile-gold"></div>
    <div class="profile-set">
      <div class='mt-cell'>
        <i style="color:rgb(74, 165, 240)" class='iconfont icon-site-copy'></i>
        <div class='mt-warp'>
          <span>我的地址</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
    </div>
    <div class="profile-set">
      <div class='mt-cell'>
        <i style="color:rgb(148, 217, 74)" class='iconfont icon-shangcheng'></i>
        <div class='mt-warp'>
          <span>金币商城</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
      <div class='mt-cell'>
        <i style="color:rgb(252, 123, 83)" class='iconfont icon-lipin'></i>
        <div class='mt-warp'>
          <span>分享拿十元现金</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
    </div>
    <div class="profile-set">
      <div class='mt-cell'>
        <i style="color:rgb(74, 165, 240)" class='iconfont icon-kefu'></i>
        <div class='mt-warp'>
          <span>我的客服</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
      <div class='mt-cell'>
        <i style="color:rgb(74, 165, 240)" class='iconfont icon-eliaomo1'></i>
        <div class='mt-warp'>
          <span>下载饿了么APP</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
      <div class='mt-cell'>
        <i style="color:rgb(74, 165, 240)" class='iconfont icon-dingdan'></i>
        <div class='mt-warp'>
          <span>规则中心</span>
          <i class='iconfont icon-icon'></i>
        </div>
      </div>
    </div>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseFooter from "@/components/Base/BaseFooter";
export default {
  name: "",
  components: {
    BaseFooter
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/common/px2rem.scss";
.profile {
  height: 100%;
  background: #f5f5f5;
  .profile-user {
    background-image: linear-gradient(90deg, #0af, #0085ff);
    height: px2rem(110);
    padding: px2rem(25) px2rem(15);
    display: flex;
    .profile-userImg {
      height: px2ren(60);
      width: px2rem(60);
    }
  }
  .profile-gold {
    height: px2rem(83.5);
    background: white;
  }
  .profile-set {
    margin-top:px2rem(10); 
    .mt-cell{
      padding: 0 px2rem(10);
      background: white;
      display: flex;
      height: px2rem(44);
      font-size: px2rem(16);
      line-height: px2rem(44);
      i{
        font-size: px2rem(18);
      }
      .mt-warp{
        padding: 0 px2rem(5); 
        flex: 1;
        display: flex;
        justify-content:space-between;
      }
    }
  }
}
</style>
