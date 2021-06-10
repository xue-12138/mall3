<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
        recommends:{}
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 8px;
    border-bottom: 8px solid darkgrey;
}
.recommend>div{
    padding-bottom: 20px;
}
.recommend img{
    height: 80px;
    width: 80px;
}
.recommend>div>a>div{
    text-align: center;
    color: black;

}
</style>