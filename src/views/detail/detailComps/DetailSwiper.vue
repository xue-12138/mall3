<template>
    <div class="detail-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in banners" :key="item" >
                <img :src="item">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>

export default {
    name:'detailswiper',
    props:{
        banners:{}
    }
}
</script>

<style scoped>
    .my-swipe{
        height: 300px;
        overflow: hidden;
    }
</style>