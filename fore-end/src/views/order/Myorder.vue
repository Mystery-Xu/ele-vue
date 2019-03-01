<template>
  <div class='order'>
    <div class='order-info' v-for="(item,index) in orderList" :key="index">
      <img :src="item.imgSrc" alt="">
      <div class='order-setion'>
        <div class='order-title'>
          <div class='order-title-true'>
            <p class='order-title-shop'>{{item.title}}</p>
            <p class='order-title-time'>{{item.time}}</p>
          </div>
          <div class='order-status'>{{item.status}}</div>
        </div>
        <div class='order-shop'>
          <div>{{item.shopInfo}}</div>
          <div>{{item.price}}</div>
        </div>
      </div>

    </div>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseFooter from '@/components/Base/BaseFooter'

export default {
  name:'order',
  components: {
    BaseFooter
  },
  data() {
    return {
      orderList:[
        {imgSrc:'https://fuss10.elemecdn.com/9/84/7815a5666bcc0f5318383986ee0f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/'
        ,title:'美宜佳',time:'1551405947',status:'订单已到达',shopInfo:'无穷盐焗鸡蛋30g',price:'23'
        }

      ]
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/style/common/px2rem.scss';
.order{
  background: #f5f5f5;
  height: 100%;;
}
.order-info{
  background: white;
  height: px2rem(155);
  padding:px2rem(20) 0 px2rem(10) px2rem(20);
  display: flex;
  justify-content: space-between;
  img{
    height: px2rem(32);
  }
  .order-title{
    width: px2rem(320);
    padding-left:px2rem(10);
    border-bottom: 1px solid #eee;
    display: flex;
    height: px2rem(48);
    font-size: px2rem(20);
    justify-content: space-between;
    .order-title-time{
      padding-top: px2rem(4); 
      font-size: px2rem(13);
    }
    .order-status{
      font-size: px2rem(16);
      padding-right: px2rem(10); 
    }
  }
  .order-shop{
    display: flex;
    justify-content: space-between;
  }
}
</style>
