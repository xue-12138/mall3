<template>
    <div class="detail-goods-info">
        <!-- 请求数据为异步，虽然是在created里面请求，会导致渲染先于数据来到 -->
        <div v-if="Object.keys(detailInfo).length !==0">
            <div class="show-key"> 
                    {{detailInfo.detailImage[0].key}}
                </div>
            <div class="showimages" v-for="item in detailInfo.detailImage[0].list" :key="item">
                <img :src="item" @load="imageLoad">
            </div>
            <div class="desc">
                <p>{{detailInfo.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailgoodsinfo',
    props:{
        detailInfo:{},
    },
    methods: {
        imageLoad(){  
            this.$emit('imageLoad')
            // this.debounce(this.$emit('imageLoad'),100)
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
    },

}
</script>

<style scoped>
    .show-key{
        padding: 10px;
    }
    .showimages>img{
        width: 100%;
    }
    .desc>p{
        padding: 10px;
        line-height: 23px;
    }
</style>