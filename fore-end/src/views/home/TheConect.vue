<template>
  <div class="h-list">
      <mt-swipe class='list-swipe' :auto='1000000000'>
        <mt-swipe-item v-for="(item,index) in list" :key="index">
          <ul>
            <li v-for="(item,index) in item" :key="index" class="h-container">
              <div class='h-containerInner'>
                <img :src="item.img" alt="">
                <span>{{item.title}}</span>
              </div>
            </li>
          </ul>
        </mt-swipe-item>
      </mt-swipe>
    <div class="h-ad">
      <div class="h-pztc">
        <p>品质套餐</p>
        <p>搭配齐全吃得好</p>
        <p>立即抢购 ></p>
        <img
          src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
        >
      </div>
      <div class="h-vip">超级会员</div>
    </div>
    <div class="h-banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgsrc" class="img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name: 'conect',
  data() {
    return {
      list:{
        list1: [
          {title: '美食',img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '商超便利',img: 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '水果',img: 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '医药健康',img: 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '浪漫鲜花',img: 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '汉堡披萨',img: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '厨房生鲜',img: 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '厨房生鲜',img: 'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '地方菜系',img: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '麻辣烫',img: 'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'}
        ],
        list2: [
          {title: '速食简餐',img: 'https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '地方小吃',img: 'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '大牌惠吃',img: 'https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '米粉面馆',img: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '包子粥店',img: 'https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
          {title: '速食简餐',img: 'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},

        ]
      },
      bannerList:[
        {imgsrc:"https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"},
        {imgsrc:"https://fuss10.elemecdn.com/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" },
        {imgsrc:"https://fuss10.elemecdn.com/4/48/37fce9a4ffbec79293357f68ecfcbjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"}
      ]
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/common/px2rem.scss";
.h-list {
  height: px2rem(177);
  font-size: px2rem(14);
  .list-swipe{
    height: px2rem(177);
  }
  .h-container {
    display: inline-block;
    width: 20%;
    height: 50%;
    .h-containerInner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: px2rem(64);
      margin-top: px2rem(12);
      img {
        height: px2rem(45);
        width: px2rem(45);
        margin-bottom:px2rem(8); 
      }
    }
  }

  .h-ad {
    margin-top: px2rem(6);
    padding: 0 px2rem(10);
    .h-pztc {
      position: relative;
      height: px2rem(110);
      background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
      padding: px2rem(15) 0 0 px2rem(10);
      img {
        position: absolute;
        top: px2rem(10);
        right: px2rem(10);
      }
    }
    .h-vip {
      background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
      height: px2rem(40);
      margin: px2rem(4) 0 px2rem(10) 0;
    }
  }
  .h-banner {
    padding: 0 px2rem(10);
    .mint-swipe {
      height: px2rem(90);
      img {
        height: 100%;
      }
    }
  }
}
</style>