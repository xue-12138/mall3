<template>
  <div class="home">
      <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 复制一份tabcontrol -->
    <tab-control :titles="titles" @tab-click='tabClick' 
                                  ref="newtabControl" 
                                  class="new-tab-control" 
                                  v-show='isTabFixed'/>
    <scroll class="content" ref="scroll" @scroll="positionscroll"
                                         @pulling-up='loadMore'>
      <swiper :banners='banners' class="swiper" @swiper-load='swiperLoad'/>
      <recommendview :recommends="recommends"/>
      <feature/>
      <tab-control :titles="titles" @tab-click='tabClick' ref="tabControl"/>
      <goods-list :goods='goods[currentType].list' ref="goodslist"/>
    </scroll>
    <back-top @bt-click='btClick' v-show="btisshow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Swiper from 'components/common/swiper/swiper.vue'
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import Recommendview from './homechilds/Recommendview.vue'
import Feature from './homechilds/Feature.vue'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/common/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/common/backtop/BackTop.vue'
import mybus from 'components/common/eventbus/mitt.js'
export default {
  components: {NavBar,Swiper,Recommendview, Feature,TabControl, GoodsList, Scroll, BackTop},
  name:'home',
  data(){
    return {
      banners:[],
      recommends:[],
      titles:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      btisshow:false,
      tabOffSetTop:0,
      isTabFixed:false
    }
  },
  created(){
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted(){
      // 防抖操作
    const Refresh= this.debounce(this.$refs.scroll.refresh,100)
    mybus.on('homeimageload',()=>{
        Refresh()
    })
  },
  watch:{
    // tabOffSetTop(){
    //   // 当位置大于taboffset就吸顶
    //   this.isTabFixed=(-position.y)>this.tabOffSetTop
    // }
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
        // this.$refs.scroll.bscroll.finishPullUp()
      })
    },
    getHomeGoods(type){
        let page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
        // 完成后才能继续上拉
        this.$refs.scroll.bscroll.finishPullUp()
      })
    },
    // 接收tabControl发来的点击事件，用来改变传递商品的type
    tabClick(index){
      switch(index){
        case 0:
            this.currentType='pop'
          break
        case 1:
            this.currentType='new'
          break
        case 2:
            this.currentType='sell'
          break
      }
      // 将最新的currentindex赋给新tabcontrol显示
      this.$refs.newtabControl.currentIndex=index
      this.$refs.tabControl.currentIndex=index
    },
    btClick(){
      this.$refs.scroll.bscroll.scrollTo(0,0,400)
    },
    positionscroll(position){
      // 判断backtop是否显示
      this.btisshow = -(position.y)>1000
      // 判断tabcontrol是否吸顶
      this.isTabFixed=(-position.y)>this.tabOffSetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()
    },
    debounce(func,delay){
      let timer=null
      return function(){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
          func.apply(this)
        },delay)
      }
    },
    swiperLoad(){
      // 想获取tabcontrol组件的offsettop必须要拿他模板的
      // 但是要注意获取的时候必须要当tabcontrol上面的东西都加载完,所以要在swiper这个大文件加载完之后获取
       this.tabOffSetTop=this.$refs.tabControl.$el.offsetTop
    },
  },
}
</script>

<style scoped>
    /* 要设置的content并不是scroll里面的content */
    .content{
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
    }
    .nav-bar{
      position: fixed;
        top: 0;
        left: 0;
        right: 0;
        /* width: 100%; */
        z-index: 9;
    }
    .tab-control{
      position: sticky;
        top: 44px;
        left: 0;
        right: 0;
        /* width: 100%; */
        z-index: 9;
      background-color: white;
    }
    .new-tab-control{
      margin-top: 44px;
    }
    .tabfixed{
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
    }
</style>