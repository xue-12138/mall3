<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <!-- 这个exclude名字和组件name属性有关 -->
      <keep-alive exclude="detail">
      <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/common/tabbar/MainTabBar.vue'
export default {
  components: { MainTabBar },
  name:'app',

}
</script>

<style scoped>
  @import './assets/css/base.css'
</style>
