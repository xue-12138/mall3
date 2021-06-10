<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:'scroll',
    data(){
        return {
            bscroll:null
        }
    },
    mounted(){
       this.bscroll=new BetterScroll(this.$refs.wrapper,{
           probeType:3,
           click:true,
           pullUpLoad:true,
           mouseWheel:true,
        //    observeDOM:true,
        //    observeImage:true
       })
       this.bscroll.on('scroll',(position)=>{
        //    将scroll事件发出去，哪个组件想要实时监听谁就接收这个事件
            this.$emit('scroll',position)
       })
       this.bscroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
       })
    },
    methods: {
        refresh(){
            this.bscroll.refresh()
            // console.log('刷新了');
        },
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
        }
    },
    // 解决上拉加载卡顿
    // updated() {
    //     this.bscroll.refresh()
    // },
}
</script>

<style scoped>
    /* 为什么content不能在这里设置 */
     .content{
        /* position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        */
    } 
</style>