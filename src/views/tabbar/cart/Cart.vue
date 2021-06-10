<template>
    <div class="cart">
        <nav-bar>
            <template #center>
                <!-- 可以直接拿到state里面的数据 -->
                <div>购物车({{$store.state.cartList.length}})</div>
            </template>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list></cart-list>
        </scroll>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './cartComps/CartList.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import mybus from 'components/common/eventbus/mitt.js'
export default {
    name:'cart',
    components: {NavBar,CartList, Scroll},
    mounted(){
        mybus.on('cartimgload',()=>{
            this.$refs.scroll.refresh()
        })
    },
}
</script>

<style scoped>
    .cart{
        /* height: 100vh; */
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>