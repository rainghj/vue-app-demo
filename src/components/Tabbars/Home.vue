
<template>
    <div class="Home">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1">
                <img src="static/p1.jpg" />
            </mt-swipe-item>
            <mt-swipe-item class="slide2">
                <img src="static/p2.jpg" />
            </mt-swipe-item>
            <mt-swipe-item class="slide3">
                <img src="static/p3.jpg" />
            </mt-swipe-item>
        </mt-swipe>
        <br/>
        <HomeCard :data='data1' />
        <HomeCard :data='data2' />
        <HomeCard :data='data3' />
        <mt-button  style="background-color: #14b9c8;color: #fafafa;">更多</mt-button>           
        <br/><br/>
        <mainFooter />
    </div>
</template>

<script>
import HomeCard from '../Card/HomeCard'
import mainFooter from '../mainFooter'
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            data1: { headerIcon: 'static/p1.jpg', headerTitle: '来自官方推荐', Title: '小镇', img: 'static/p1.jpg', footer: '在这里，可以感觉到春天的气息' },
            data2: { headerIcon: 'static/p2.jpg', headerTitle: '来自官方推荐', Title: '森林', img: 'static/p2.jpg', footer: '在这里，可以感觉到森林的气息' },
            data3: { headerIcon: 'static/p2.jpg', headerTitle: '来自官方推荐', Title: '树叶', img: 'static/p3.jpg', footer: '在这里，可以感觉到树叶的气息' }
        }
    },
    components: {
        HomeCard,
        mainFooter
    }
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    /* margin-bottom: 20px; */
}

.mint-swipe-item {
    line-height: 200px;
}

.slide1 {
    background-color: #fff;
    color: #fff;
}

.slide2 {
    background-color: #fff;
    color: #fff;
}

.slide3 {
    background-color: #fff;
    color: #fff;
}
</style>