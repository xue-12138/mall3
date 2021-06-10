<template>
    <div class="goods-list">
        <goods-list-item v-for="item in goods" :key="item" :goodsItem="item"/>
        </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
    name:'goodslist',
    props:{
        goods:{}
    }
}
</script>

<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
    }
</style>