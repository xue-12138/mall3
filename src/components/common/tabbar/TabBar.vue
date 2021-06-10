<template>
    <div class="tab-bar">
        <slot/>
    </div>
</template>

<script>
export default {
    name:'tab-bar',
    components: {},
}
</script>

<style scoped>
    .tab-bar{
        display: flex;
        justify-content: space-around;
        box-shadow:0 -3px 1px rgba(100, 100, 100, .1);
        width: 100%;
        height: 49px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 9;
    }
</style>