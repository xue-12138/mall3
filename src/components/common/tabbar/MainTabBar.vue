<template>
       <tab-bar>
      <tab-bar-item path='/home' color='red'>
        <template #item-icon>
          <img src="~assets/img/TabBar/首页.svg" >
        </template>
        <template #item-icon-active>
          <img src="~assets/img/TabBar/首页选中.svg" >
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category' color='blue'> 
        <template #item-icon>
          <img src="~assets/img/TabBar/分类.svg" >
        </template>
        <template #item-icon-active>
          <img src="~assets/img/TabBar/分类选中.svg" >
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cart' color='green'>
        <template #item-icon>
          <img src="~assets/img/TabBar/购物车.svg" >
        </template>
        <template #item-icon-active>
          <img src="~assets/img/TabBar/购物车选中.svg" >
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile' color='black'>
        <template #item-icon>
          <img src="~assets/img/TabBar/我的.svg" >
        </template>
        <template #item-icon-active>
          <img src="~assets/img/TabBar/我的选中.svg" >
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>  
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem';
export default {
    name:'maintabbar',
    components:{TabBar,TabBarItem}
}
</script>

<style scoped>
    .tab-bar-item>div>img{
  width: 24px;
  height: 24px;
}
.tab-bar-item>div>div{
  font-size: 15px;
}
</style>