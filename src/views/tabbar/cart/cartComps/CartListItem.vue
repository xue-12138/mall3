<template>
    <div class="cart-list-item">
        <div class="choose">
            <button type="submit"></button>
        </div>
        <div  class="image">
            <img :src="cartList.image" @load='cartimgload'>
        </div>
        <div class="text">
            <div class="title">
                <div>{{cartList.title}}</div>
            </div>
            <div class="desc">
                <div>{{cartList.desc}}</div>
            </div>
            <div class="pc">
                <div class="price">￥{{cartList.price}}</div>
                <div class="count">x{{cartList.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import mybus from 'components/common/eventbus/mitt.js'
export default {
    name:'cartlistitem',
    data(){
        return {
            ischeck:true
        }
    },
    props:{
        cartList:{}
    },
    methods: {
        cartimgload(){
            if(this.$route.path.includes('/cart')){
                mybus.emit('cartimgload')
            }
        }
    },
}
</script>

<style scoped>
    .image>img{
        width: 90px;
        padding: 10px;
    }
    .cart-list-item{
        display: flex;
        border-bottom: 1px solid darkgray;
    }
    .text{
        width: 68.5%;
    }
    .title{
        /* border: 1px solid darkblue; */
        font-size: 16px;
        padding: 7px;
    }
    .title>div{
        white-space:nowrap;
        text-overflow:ellipsis; 
        overflow: hidden;
    }
    .desc{
        /* border: 1px solid darkcyan; */
        padding-top: 10px;
        padding-left:7px ;
        font-size: 15px;
    }
    .desc>div{
        white-space:nowrap;
        text-overflow:ellipsis; 
        overflow: hidden;
    }
    .pc{
        display: flex;
        justify-content: space-between;
        /* border: 1px solid springgreen; */
        height: 70px;
    }
    .price{
        /* border: 1px solid darkcyan; */
        padding-top: 45px;
        padding-left: 10px;
        color: tomato;
    }
    .count{
        /* border: 1px solid darkcyan; */
        padding-top:45px;
        padding-right: 15px;
    }
    .choose{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 20px;
        height: 20px;
        padding-left: 5px;
    }
</style>