<template>
    <div class="detail-base-info">
        <div class="title">
            <span>{{goods.title}}</span>
        </div>
        <div class="price">
            <span class="newPrice">{{goods.newPrice}}</span>
            <span class="oldPrice">{{goods.oldPrice}}</span>
            <span class="actprice">{{goods.discount}}</span>
        </div>
        <div class="sellmsg">
            <div v-for="item in goods.columns" :key="item">
            <span>{{item}}</span>
            </div>
        </div>
        <div class="service">
            <div v-for="item in goods.services" :key="item">
            <img :src="item.icon">
            <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailbaseinfo',
    props:{
        goods:{}
    }
}
</script>

<style scoped>
    .title{
        margin: 8px 8px 8px 8px;
        font-size: 17px;
        font-weight: bold;
    }
    .price{
        margin: 8px 8px 8px 8px;
    }
    .newPrice{
        margin-right: 3px;
        font-size: 25px;
        color: tomato;
    }
    .oldPrice{
        margin-right: 5px;
        text-decoration: line-through;
        color: grey;
    }
    .actprice{
        background-color: tomato;
        color: white;
        border-radius: 8px;
        padding: 5px;
    }
    .sellmsg{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    .sellmsg>div{
        padding: 8px;
    }
    .sellmsg>div>span{
        color: grey;
    }
    .service{
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        padding-bottom: 25px;
        border-bottom: 4px solid gray;
        flex-wrap: wrap;
    }
    .service>div{
        padding: 8px;
    }
    .service>div>img{
        width: 15px;
        height: 15px;
    }
    .service>div>span{
        font-weight: bold;
    }
</style>