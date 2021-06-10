<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        background-color: tomato;
    }
    .left,.right{
        width: 60px;
        height: 44px;
        
    }
    .center{
        flex:1;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>