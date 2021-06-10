<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="item"
                                            @click="tabClick(index)" 
                                            :class="{colorActive:index===currentIndex}">
            <div>{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabcontrol',
    props:{
        titles:{}
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods: {
        tabClick(index){
            this.currentIndex=index
            this.$emit('tabClick',index)
        }

    },
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        justify-content: space-around;
        padding:7px;
    }
    .tab-control>div{
        padding-bottom: 6px;
    }
    .colorActive{
        color: tomato;
        border-bottom: 2px solid tomato;
    }
</style>