<template>
    <div class="back-top">
        <img src="~assets/img/BackTop/back-top.svg" @click="btClick">
    </div>
</template>

<script>
export default {
    name:'backtop',
    methods: {
        btClick(){
            this.$emit('btClick')
        }
    },
}
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 10px;
        bottom: 70px;
    }
    .back-top>img{
        width:60px;
        height: 60px;
    }
</style>