<template>
    <div class="detail-shop-info">
        <div class="head">
            <img :src="shop.logo">
            <div>{{shop.name}}</div>
        </div>
        <div class="main">
            <div class="left">
              <div class="left1">
                  <div class="fans">{{shop.fans}}</div>
                  <div>总销量</div>
              </div>
              <div class="left2">
                  <div class="count">{{shop.goodCount}}</div>
                  <div>全部宝贝</div>
              </div>  
            </div>
            <div class="right">
                <div v-for="item in shop.score" :key="item">
                    <div>
                        <span class="span1">{{item.name}}</span>
                        <span class="span2" :class='{active:item.isBetter}'>{{item.score.toFixed(2)}}</span>
                        <span class="span3" :class='{active:item.isBetter}'>{{item.isBetter ? '高' : '低'}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailshopinfo',
    props:{
        shop:{}
    }
}
</script>

<style scoped>
    .head{
        display: flex;
    }
    .head>div{
        font-size: 18px;
        flex: 1;
        padding: 48px 0px 20px 0px;
    }
    .head>img{
        height: 60px;
        width: 60px;
        margin:30px 10px 30px 10px;
        border-radius:50%;
        border: 1px solid darkgoldenrod;
    }
    .main{
        display: flex;
    }
    .left,.right{
        /* border: 1px solid darkblue; */
        flex: 1;
    }
    .left{
        display: flex;
    }
    .left1,.left2{
        flex: 1;
        /* border: 1px solid darkblue; */
        padding: 17px;
    }
    .left2{
        padding-left: 0px;
        /* border: 1px solid darkblue; */
    }
    .count{
        /* border: 1px solid darkgoldenrod; */
        text-align: center;
        font-size: 18px;
    }
    .fans{
         /* border: 1px solid darkgoldenrod; */
        font-size: 18px;
    }
    .span1{
        padding: 3px 20px 3px 40px;
        line-height: 25px;
    }
    .span2{
        padding: 0px 20px 0px 0px ;
        color: yellowgreen;
    }
    .span3{
        color: yellowgreen;
    }
    .active{
        color: tomato;
    }
</style>