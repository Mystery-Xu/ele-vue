<template>
  <div class="h-header">
    <div class="h-address"></div>
    <div class="h-search">
      <div class='h-searchinner'>

        <span>搜索饿了么商家、商品名称</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '@/style/common/px2rem.scss';

  .h-header{
    background: #0090ff;
    .h-address{
      height: px2rem(45);
    }
    .h-search{
      height: px2rem(51);
      display: flex;
      justify-content: center;
      align-items: center;
      .h-searchinner{
        height: px2rem(36);
        width: px2rem(349);
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: px2rem(16);
          color: #666;
        }
      }
    }
  }
</style>
