<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tab-bar-item',
    computed:{
        isActive(){
            return this.$route.path.includes(this.path)
        },
        activeStyle(){
            return this.isActive ? {color:this.color} :{}
        }

    },
    props:{
        path:{},
        color:{}
    },
    methods:{
        //切换路由
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>

</style>