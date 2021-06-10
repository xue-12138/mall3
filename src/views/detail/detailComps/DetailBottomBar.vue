<template>
    <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服"  />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-icon icon="shop-o" text="店铺"  />
    <van-action-bar-button type="warning" text="加入购物车" @click="cartClick"/>
    <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
</template>

<script>
export default {
    name:'detailbottombar',
    methods: {
        cartClick(){
            this.$emit('cartClick')
        }
    },
}
</script>

<style scoped>

</style>