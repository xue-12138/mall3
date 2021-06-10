<template>
    <div class="goods-list-item" @click="itemClick">
        <img :src="showimg" @load="imageLoad">
        <div class="title">
            <p>{{goodsItem.title}}</p>
            <div class="pc">
                <span class="price">{{goodsItem.price}}</span>
                <img src="~assets/img/fivestar/五角星.svg">
                <span class="cfav">{{goodsItem.cfav}}</span>
            </div>
        </div>
        </div>
</template>

<script>
import mybus from '../eventbus/mitt.js'
export default {
    name:'goodslistitem',
    props:{
        goodsItem:{}
    },
    computed:{
        showimg(){
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        // 当图片加载完执行的函数
        imageLoad(){
            if(this.$route.path.includes('/home')){
                mybus.emit('homeimageload')
            } else if(this.$route.path.includes('/detail')){
                mybus.emit('detailimageload')
            }
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsItem.iid)
        },
    },
}
</script>

<style scoped>
    .goods-list-item{
        width: 48%;
        /* border: 1px solid darkgoldenrod; */
        padding: 3px;
    }
    .goods-list-item>img{
        width: 100%;
    }
    p{
        white-space:nowrap;
        text-overflow:ellipsis; 
        overflow: hidden;
        margin:0;
        font-size: 15px;
    }
    .pc{
        text-align: center;
    }
    .price{
        color: tomato;
    }
    .pc>img{
        width: 15px;
        height: 15px;
    }
</style>