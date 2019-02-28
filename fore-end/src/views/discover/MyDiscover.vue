<template>
  <div class='discover'>
    <div class="dis-surround">
      <div class='dis-gold'>
        <p class="dis-title">金币商城</p>
        <p>0元好物在这里</p>
        <img  class="icon" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/">
      </div>
      <div class="dis-other">
        <div class='dis-otherList'>
          <p class='dis-title'>推荐有礼</p>
          <p> 10元现金拿不停</p>
          <img loading="" class="icon" src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/">
        </div>
        <div class='dis-otherList'>
          <p class='dis-title'>周边优惠</p>
          <p>领取口碑好券</p>
          <img loading="" class="icon" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/">
        </div>
      </div>
    </div>
    <section class='activity'>
      <div class="activity-header">
        <p>限时好礼</p>
        <p class='dis-second-title'>金币换豪礼</p>
      </div>
      <div class="activity-body">
        <div v-for="(item,index) in discoverList" :key="index" class='activity-body-div'>
          <img :src="item.imgsrc" alt="" srcset="">
          <p>{{item.title}}</p>
          <p>{{item.gold}}</p>
        </div>
      </div>
      <p class="activity-more">查看更多</p>
    </section>
    <BaseFooter></BaseFooter>
  </div>
</template>
<script>
import BaseFooter from '../../components/Base/BaseFooter'
export default {
  name: 'discover',
  components: {
    BaseFooter    
  },
  data() {
    return {
      discoverList:[
        {gold:'90金币',title:"3元饿了么鲜果超市红包",imgsrc:"https://fuss10.elemecdn.com/d/e8/e9079650047f1cc00c16474a1e8bdjpeg.jpeg?imageMogr/format/webp/"},
        {gold:'9金币',title:"扫地机器人",imgsrc:"https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/"},
        {gold:'9金币',title:"电动按摩理疗仪",imgsrc:"https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/"}
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/style/common/px2rem.scss';
.discover{
  background: #f5f5f5;
  height: 100%;
  .dis-surround{
    color: #666;
    background: #fff;
    height: px2rem(160);
    display: flex;
    .dis-gold{
      position: relative;
      height: 100%;
      width: 50%;
      padding: px2rem(15) 0 0 px2rem(10);
      font-size: px2rem(14);
      border-right: px2rem(1) solid #ededed;
      .dis-title{
        font-size: px2rem(18);
        line-height: px2rem(30);
        color: rgb(255, 153, 0);
      }
      img{
        position: absolute;
        bottom: 0;
        right: 0;
        height: px2rem(75);
        width: px2rem(75);
      }
    }
    .dis-other{
      width: 50%;
      .dis-otherList{
        position: relative;
        height: 50%;
        font-size: px2rem(14);
        padding: px2rem(10) 0 0 px2rem(10);
        .dis-title{
          font-size: px2rem(18);
          line-height: px2rem(30);
          color: rgb(27, 169, 225);
        }
        img{
          position: absolute;
          right: px2rem(10);
          top: px2rem(10);
          height: px2rem(45);
          width: px2rem(45);
        }
      }
    }
  }
  .activity{
    background: #fff;
    height: px2rem(305);
    margin-top: px2rem(10);
    .activity-header{
      height: px2rem(60);
      p{
        text-align: center;
        padding-top:px2rem(20);
        line-height: px2rem(21);
        font-size: px2rem(18);
        font-weight: 700;
        font-family: PingFang SC,Helvetica Neue,Arial,sans-serif; 
        color: #333;
      }
      .dis-second-title{
        font-size: px2rem(11);
        line-height: px2rem(13);
        padding: 0;
        color: #666;
        font-weight: 400;  
      }
    }
    .activity-more{
      font-size: px2rem(16);
      color: #999;
      text-align: center;
    }
    .activity-body{
      display: flex;
      padding: px2rem(10);
      font-size: px2rem(14);
      .activity-body-div{
        flex: 1;
      }
      img{
        height: px2rem(110);
        width: px2rem(110);
      }
    }
  }
}

</style>