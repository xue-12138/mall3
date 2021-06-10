<template>
    <div>
        <nav-bar class="nav-bar">
            <template #left>
                <div class="left">
                  <img src="~assets/img/navbar/后退.svg" @click="imgClick">  
                </div>
            </template>
            <template #center>
                <div class="center">
                    <div v-for="(item,index) in titles" 
                        :key="item"
                        :class="{active:currentIndex===index}" 
                        @click="itemClick(index)">
                    {{item}}
                    </div>
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    name:'detailNavBar',
    components: { NavBar},
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index
            this.$emit('itemClick',index)
        },
        imgClick(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    
    .nav-bar{
        background-color: white;
    }

    .center{
        display: flex;
        align-items: center;

    }
    .center>div{
        flex: 1;
        font-size: 15px;
    }

    .active{
        color: tomato;
    }
    .left{
        display: flex;
        justify-content: center;
        width: 60px;
        height: 44px;
    }
    .left>img{
        width: 30px;
        height: 30px;
        margin-top: 7px;
    }
</style>