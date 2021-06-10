<template>
    <div class="detail">
        <!-- 用来显示 -->
    <detail-nav-bar class="nav-bar" @item-click='itemClick' ref="newnavbar" v-show="navisshow"/>
        <scroll class="content" ref="scroll" @pulling-up='loadMore' @scroll="contentscroll">
            <detail-nav-bar class="nav-bar" @item-click='itemClick' ref="navbar"/>
            <detail-swiper :banners='banners' class="swiper"/>
            <detail-base-info :goods='goods'/>
            <detail-shop-info :shop='shop'/>
            <detail-goods-info :detail-info="detailInfo" @image-load='imageLoad'/>
            <detail-param-info :param-info='paramInfo' ref="params"/>
            <detail-comment-info :comment-info='commentInfo' ref="comment"/>
            <goods-list :goods='recommends' ref="recommend"/>
        </scroll>
        <back-top @btClick='btClick' v-show="btisshow"/>
        <detail-bottom-bar @cart-click='cartClick'/>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll'
import DetailNavBar from './detailComps/DetailNavBar.vue'
import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo.vue'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo';
import DetailParamInfo from './detailComps/DetailParamInfo'
import DetailCommentInfo from './detailComps/DetailCommentInfo.vue'
import GoodsList from 'components/common/goods/GoodsList';
import mybus from 'components/common/eventbus/mitt';
import DetailBottomBar from './detailComps/DetailBottomBar'
import BackTop from 'components/common/backtop/BackTop.vue'
export default {
  components: {Scroll,DetailNavBar,DetailSwiper, DetailBaseInfo,DetailShopInfo,DetailGoodsInfo,DetailParamInfo, DetailCommentInfo,GoodsList,DetailBottomBar, BackTop},
    name:'detail',
    data(){
        return {
            iid:null,
            banners:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:{},
            // 各个navbar的初始位置
            themeTopY:[0,100,200,300],
            // 记录联动效果
            currentIndex:0,
            navisshow:false,
            btisshow:false,
            cartProduct:{},
        }
    },
    created(){
        this.iid=this.$route.params.iid
        this.getDetail(this.iid)
        this.getRecommend()
    },
    mounted(){
        const Refresh= this.debounce(this.$refs.scroll.refresh,50)
        mybus.on('detailimageload',()=>{
            Refresh()
    })
    },
    methods: {
        getDetail(){
            getDetail(this.iid).then(res=>{
                const data=res.data.result
                this.banners=data.itemInfo.topImages
                this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
                this.shop=new Shop(data.shopInfo)
                this.detailInfo=data.detailInfo
                this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
                
                if(data.rate.cRate !==0){
                    this.commentInfo=data.rate.list[0]
                    // console.log(this.commentInfo);
                }
            })
        },

        getRecommend(){
            getRecommend().then(res=>{
            this.recommends=res.data.data.list
        })
        },
        loadMore(){
            this.getDetail(this.iid)
            this.$refs.scroll.refresh()
        },
        imageLoad(){
            // this.$refs.scroll.refresh()
            // 这种防抖不行
            // this.debounce(()=>{
            //     this.themeTopY=[]
            //     this.themeTopY.push(0);
            //     this.themeTopY.push(this.$refs.params.$el.offsetTop)
            //     this.themeTopY.push(this.$refs.comment.$el.offsetTop)
            //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
            // },100)
                this.themeTopY=[]
                this.themeTopY.push(0);
                this.themeTopY.push(this.$refs.params.$el.offsetTop)
                this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
            // console.log(this.themeTopY);
            this.$refs.scroll.refresh()
        },
        itemClick(index){
            // console.log(index);
            this.$refs.scroll.bscroll.scrollTo(0,-this.themeTopY[index],300)
            // this.$refs.navbar.currentIndex=index
            // this.$refs.newnavbar.currentIndex=index
       },

    //    相当复杂
    // 对应相应颜色
       contentscroll(position){
        //    获取Y值
        const positionY=-position.y
        // positionY和themeTopY进行对比
        // positionY在themeTopY[0]和themeTopY[1]之间，index=0
        let length = this.themeTopY.length
            for(let i=0;i<length;i++){
                // for..in 遍历数组获取的下标是字符串类型，需要转换
                // 第一个判断用来防抖
                if(this.currentIndex !== i && ((i<length-1 && positionY > this.themeTopY[i] && positionY < this.themeTopY[i+1]) 
                ||(i===length-1 && positionY > this.themeTopY[i]))){
                    this.currentIndex=i;
                    // 改变navbar的currentIndex
                    this.$refs.navbar.currentIndex=i
                }
            }
        this.navisshow=(-position.y)>44
        this.btisshow=(-position.y)>1000
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
        btClick(){
            this.$refs.scroll.bscroll.scrollTo(0,0,400)
        },
        cartClick(){
        //    获取商品在购物车展示的信息
        this.cartProduct.image=this.banners[0]
        this.cartProduct.title=this.goods.title
        this.cartProduct.desc=this.goods.desc
        this.cartProduct.price=this.goods.realPrice
        this.cartProduct.iid=this.iid
        // 将商品加入到购物车里面
        // 这种方法是没有经过mutations的错误写法
        // this.$store.cartList.push(this.cartProduct)
        this.$store.dispatch('cartClick',this.cartProduct)
    }
    },
}
</script>

<style scoped>
    .nav-bar{
        position: sticky;
        top: 0px;
        z-index: 9;
        background-color:antiquewhite;
    }
    .content{
        position: absolute;
        top: 0px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .detail{
        /* 这样设置可以将下面的tabbar盖住 */
        /* 必须设置高度，否则会跑到上面去 */
        height: 100vh;
        position: relative;
        z-index: 10;
        background-color: antiquewhite;
    }
</style>