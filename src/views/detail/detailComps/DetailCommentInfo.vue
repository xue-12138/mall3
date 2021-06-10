<template>
    <div class="detail-comment-info">
        <div v-if="Object.keys(commentInfo).length !==0">
        <div class="comment">
            <div class="comment-top">
                <div class="top-left">用户评价</div>
                <div class="top-right">更多</div>
            </div>
            <div class="comment-main">
                <div class="main-head">
                    <img :src="commentInfo.user.avatar">
                    <span>{{commentInfo.user.uname}}</span>
                </div>
                <div class="comments">
                    <p>{{commentInfo.content}}</p>
                </div>
                <div class="ownercomments">
                    <p>{{commentInfo.explain}}</p>
                </div>
                <div class="sellmsg">
                    <span class="time">{{commentInfo.created}}</span>
                    <span class="style">{{commentInfo.style}}</span>
                </div>
                <div class="sellimage" v-if="commentInfo.images">
                    <div v-for="item in commentInfo.images" :key="item">
                        <img :src="item">
                    </div>
                </div>
                <div class="recommend">
                    <span>以下为您精心推荐:</span>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailcommentinfo',
    props:{
        commentInfo:{},
    },
  
}
</script>

<style scoped>
    .comment-top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 3px solid grey;
    }
    .top-left,.top-right{
        padding: 15px;
    }
    .main-head{
        display: flex;
    }
    .main-head>img{
        padding:20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .main-head>span{
        flex: 1;
        margin-top:40px;
        font-weight: 520;
        font-size: 18px;
    }
    .comments>p{
        margin-top:0px;
        padding:0px 15px 0px 15px;
        color: darkgrey;
        line-height: 25px;
    }
    .style{
        color: darkgray;
        padding-left: 10px;
    }
    .time{
        padding-left:10px;
        color: darkgray;
    }
    .sellimage{
        display: flex;
    }
    .sellimage>div>img{
        width: 90px;
        height: 90px;
        padding: 5px;
    }
    .ownercomments>p{
        padding: 10px;
        color: darkgray;
        line-height: 25px;
    }
    .recommend{
        padding: 70px 0px 20px 20px;
    }
</style>