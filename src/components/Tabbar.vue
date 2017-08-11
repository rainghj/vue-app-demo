<template>
    <div>
        <mt-header fixed v-bind:title="maintitle">
            <router-link to="/UserSetting" slot="left">
                <mt-button>
                    <img :src="userImg" height="30" width="30" style="border-radius:50%;border:1px solid #FFF;magin-top:5px;background:#fff">
                </mt-button>
            </router-link>
        </mt-header>
        <div class="page-tabbar">
            <div class="page-wrap">
                <!-- <div class="page-title">Tabbar</div>
                        <div>
                            <mt-cell class="page-part" title="当前选中" :value="selected" />
                        </div> -->
    
                <mt-tab-container class="page-tabbar-container" v-model="selected">
                    <mt-tab-container-item id="生活">
                        <Home />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="订单">
                        <mt-cell v-for="n in 5" :title="'订单 ' + n" />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="比赛">
                        <GameIndex />
                    </mt-tab-container-item>
                    <mt-tab-container-item id="我的">
                        <div class="page-part">
                            <mt-cell v-for="n in 12" :title="'我的 ' + n" />
                        </div>
                        <router-link to="/">
                            <mt-button type="danger" size="large">退出</mt-button>
                        </router-link>
                    </mt-tab-container-item>
                </mt-tab-container>              
            </div>
        
            <mt-tabbar v-model="selected" fixed>
                <mt-tab-item id="生活">
                    <img slot="icon" src="../assets/img/svg/探索A.svg"> 生活
                </mt-tab-item>
                <mt-tab-item id="订单">
                    <img slot="icon" src="../assets/img/svg/探索A.svg"> 订单
                </mt-tab-item>
                <mt-tab-item id="比赛">
                    <img slot="icon" src="../assets/img/svg/探索A.svg"> 比赛
                </mt-tab-item>
                <mt-tab-item id="我的">
                    <img slot="icon" src="../assets/img/svg/设置.svg"> 我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
import Home from '../components/Tabbars/Home';
import GameIndex from '../components/game/gameIndex'
export default {
    name: 'page-tabbar',
    computed: {
        userImg() {
            return this.$store.state.userImg
        }
    },
    data() {
        return {
            selected: this.$store.state.tabBarSelected,
            maintitle: this.$store.state.tabBarSelected
        };

    },
    components: {
        Home ,
        GameIndex
    },
    watch: {
        selected: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定           
            this.maintitle = val;
            this.$store.commit('tabBarSelected',val);
            // console.log('----');
            // console.log(this.$store.state.tabBarSelected);
        }
    }
};
</script>

<style scoped>
.page-tabbar {
    overflow: hidden;
    height: 100vh;
}

.page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
}

.mint-tabbar.is-fixed {
    background-color: #14B9C8;
    color: white
}

.mint-tabbar>.mint-tab-item.is-selected {
    background-color: #12A7B4;
    color: white
}

.mint-header {
    background-color: #14B9C8;
    font-size: 18px
}
</style>