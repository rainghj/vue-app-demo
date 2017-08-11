<template>
    <div class="HomeCard">
        <div class="card-header">
            <a href="#" class="card-header-icon">
                <img class="img" :src="data.headerIcon"></img>
            </a>
            <span class="card-header-title">{{data.headerTitle}}</span>
        </div>
        <div>
        <a class="card-title">
            {{data.Title}}
        </a>
        </div>
        <br/>
        <div>
            <router-link to='/GameDetail' class="card-img"><img :src="data.img" /></router-link>
        <!-- <a   class="card-img"><img :src="data.img" /></a> -->
        </div>
        <div class="card-foot" >{{data.footer}}</div>
        <!-- -->
    </div>
</template>

<script>
export default {
    name: 'HomeCard',
    props:["data"],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        }
    }
}
</script>
<style scoped>
.HomeCard {
    background-color: #fff;
    /* height: 100px; */
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
}

.card-header {
    margin-left: 10px;
    position: relative;
    height: 20px;
    padding: 12px 0 12px
}

.card-header-icon {
    width: 20px;
    height: 20px;
    float: left
}

.img {
    width: 100%
}

.card-header-title {
    float: left;
    margin: 1px 0 0 5px;
    font-size: 12px;
    color: #999;
}

.card-title {
    float: left;
    margin-left: 10px
}
.card-img{
    display: block;
    position: relative;
    margin: 10px 0px 0px;
    max-height: 150px;
    overflow: hidden;
}
.card-foot{
    margin: 15px 0 0;
    color: #999;
    padding: 0px 0px 15px;
}

</style>