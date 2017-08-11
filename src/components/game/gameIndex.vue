
<template>
    <div class="gameIndex">
    
        <!-- <HomeCard :data='data1' /> 
                <HomeCard :data='data2' />
                <HomeCard :data='data3' />-->
    
        <div v-for="item in items">
            <mt-cell>
                <div v-on:click="clickTodo(item.id)">
                    比赛名称:{{item.gname}}&emsp;比赛时间:{{item.createdAt}}
                </div>
            </mt-cell>
        </div>
    
        <mt-button style="background-color: #14b9c8;color: #fafafa;">更多</mt-button>
        <br/>
        <br/>
    
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
            items: [
                {
                    "gname": "1",
                    "info": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    "picture": "uploadFile/img/1499840004695.jpg",
                    "status": "0",
                    "result": "未排名",
                    "total": "[66.5,114]",
                    "endAt": "2017-07-09 13:00:30",
                    "id": "fcdcef4a-2635-458a-a43c-8dcfee96d870",
                    "createdAt": "2017-7-5 11:12:54",
                    "updatedAt": "2017-7-6 11:12:54",
                    "version": "0",
                    "corn": 66.5,
                    "sesame": 114
                },
                {
                    "gname": "比赛测试1",
                    "info": "20170609比赛测试",
                    "picture": "uploadFile/img/1499830560986.jpg",
                    "status": "0",
                    "result": "[[57,A057],[58,A058],[59,A059],[60,A060],[61,A061],[62,A062],[63,A063],[64,A064],[65,A065],[66,A066],[67,A067],[68,A068],[69,A069],[70,A070],[71,A071],[72,A072],[73,A073],[92,A092],[93,A093],[94,A094],[95,A095],[96,A096],[97,A097],[98,A098],[99,A099],[100,A100],[1,A001],[2,A002],[3,A003],[4,A004],[5,A005],[6,A006],[7,A007],[8,A008],[21,A021],[22,A022],[23,A023],[24,A024],[25,A025],[26,A026],[27,A027],[28,A028],[29,A029],[30,A030],[44,A044],[45,A045],[46,A046],[47,A047],[48,A048],[49,A049],[50,A050],[51,A051],[52,A052],[53,A053],[54,A054],[55,A055],[56,A056],[9,A009],[10,A010],[11,A011],[12,A012],[13,A013],[14,A014],[15,A015],[16,A016],[17,A017],[18,A018],[19,A019],[20,A020],[31,A031],[32,A032],[33,A033],[34,A034],[35,A035],[36,A036],[37,A037],[38,A038],[39,A039],[40,A040],[41,A041],[42,A042],[43,A043],[74,A074],[75,A075],[76,A076],[77,A077],[78,A078],[79,A079],[80,A080],[81,A081],[82,A082],[83,A083],[84,A084],[85,A085],[86,A086],[87,A087],[88,A088],[89,A089],[90,A090],[91,A091]]",
                    "total": "[560.5,931]",
                    "endAt": "2017-07-09 13:00:30",
                    "id": "26e461e9-ea44-4fe9-9807-c5671ba56eca",
                    "createdAt": "2017-6-9 10:16:49",
                    "updatedAt": "2017-6-9 10:16:49",
                    "version": "0",
                    "corn": 560.5,
                    "sesame": 931
                },
                {
                    "gname": "第1次比赛",
                    "info": "比赛说明：第一届",
                    "picture": "uploadFile/img/1499830725548.jpg",
                    "status": "0",
                    "result": "",
                    "total": "[0,0]",
                    "endAt": "2017-07-09 13:00:30",
                    "id": "2fdfd7b0-1b91-454f-a3f8-e459323c126a",
                    "createdAt": "2017-5-25 16:55:26",
                    "updatedAt": "2017-5-25 16:55:26",
                    "version": "0",
                    "corn": 0,
                    "sesame": 0
                },
                {
                    "gname": "第三次比赛",
                    "info": "比赛说明：第三届",
                    "picture": "uploadFile/img/1499830750725.jpg",
                    "status": "0",
                    "result": "[[57,A057],[58,A058]]",
                    "total": "[95,76]",
                    "endAt": "2017-07-09 13:00:30",
                    "id": "34f9b180-41e3-4e26-a488-161ea7651704",
                    "createdAt": "2017-5-25 16:51:41",
                    "updatedAt": "2017-5-26 17:11:29",
                    "version": "156",
                    "corn": 95,
                    "sesame": 76
                }
            ]
        }
    },
    components: {
        HomeCard,
        mainFooter
    },
    methods: {
        clickTodo(id) {
            console.log('点击了比赛：' + id);
        }
    }
}
</script>
<style scoped>
.gameIndex {
    margin-top: 20px
}
</style>