<template>
  <div class='home'>
    <TheHeader></TheHeader>
    <TheConect></TheConect>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseFooter from '../../components/Base/BaseFooter'
import TheHeader from './TheHeader'
import TheConect from './TheConect'


export default {
  name:'home',
  components: {
    BaseFooter,
    TheHeader,
    TheConect
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/common/px2rem.scss';

.home{
  height: 100%;
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
}
</style>
