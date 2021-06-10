<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in banners" :key="item">
      <a :href="item.link"><img :src="item.image" @load="swiperLoad"></a>
  </van-swipe-item>
    </van-swipe>
</template>

<script>

export default {
    name:'swiper',
    props:{
        banners:{}
    },
    data(){
        return {
            isload:false
        }
    },
    methods: {
        swiperLoad(){
            // 节流效果 当发送之后就不再发送了
            if(!this.isload){
                this.$emit('swiperLoad')
                this.isload=true
            }
        }
    },
}
</script>

<style scoped>
    
    .my-swipe img{
      width: 100%;
      height: 180px;
  }
</style>
