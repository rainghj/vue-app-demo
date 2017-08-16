<template>
    <div class="tabbar_bbs">
        <mt-button @click="getTopics" size="large" type="danger">取topics</mt-button>
        <div v-for="item in Topics">    
            <div class="bbs-cell" v-on:click="clickTodo(item.id)">   
                <div class="bbs-cell-title">{{item.title}}</div>
                <div class="bbs-cell-footer">
                    <div class="bbs-cell-img">
                        <img slot="icon" :src="item.author.avatar_url" width="14" height="14" style="float: left;padding: 2px 0 2px;">
                        <span style="font-size: x-small;float: left;padding: 2px 4px;">{{item.author.loginname}}  </span> 
                        <span class="bbs-cell-span">{{item.create_at}}</span> 
                    </div>                    
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
import GetData from '../../actions/getData'

export default {
    creaded: function () {
        console.log('creaded');
        this.getTopics();
    },
    name: 'tabbar_bbs',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            topics: this.$store.state.topics
        }
    },
    methods: {
        getTopics() {
            this.$store.dispatch('AgetTopics', { 'this': this, 'page': 1 });
        }
    },
    computed: {
        Topics() {
            console.log('topics:');
            console.log(this.$store.state.topics);
            return this.$store.state.topics
        }
    },
}
</script>
<style scoped>
.bbs-cell {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    text-decoration: none;
    text-align: initial;  
    margin-bottom: 1px; 
}

.bbs-cell-title {
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
}
.bbs-cell-footer{
    color: #888;
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5px;
    min-height: 18px;
}
 
.bbs-cell-span{
    float: right;
     padding: 2px 4px;
     font-size: x-small; 
}
</style>
