<template>
    <div class="cart-list">
        <cart-list-item v-for="item in $store.state.cartList" :key="item" :cart-list='item'/>
    </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
    name:'cartlist',
    components:{CartListItem}
}
</script>

<style scoped>
    
</style>