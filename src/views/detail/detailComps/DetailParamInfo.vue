<template>
    <div class="detail-param-info" v-if="Object.keys(paramInfo).length !==0">
        <table class="size" v-for="(table,index) in paramInfo.sizes" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">
                    {{td}}
                </td>
            </tr>
        </table>
        <table class="param" v-for="(info,index) in paramInfo.infos" :key="index">
            <tr>
                <td class="key">{{info.key}}</td>
                <td class="value">{{info.value}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'detailparaminfo',
    props:{
        paramInfo:{}
    }
}
</script>
<style scoped>
    .size>tr>td{
        /* border: 1px solid slateblue; */
        padding: 15px;

    }
    .param>tr>span{
        /* border: 1px solid cadetblue; */
        padding: 15px;
    }
    .param>tr>td{
        /* border: 1px solid cadetblue; */
        padding: 15px;
        
    }
    .key{
        white-space:nowrap
    }
    .value{
        color: tomato;
    }
</style>