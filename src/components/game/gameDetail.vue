<template>
    <div class="gameDetail">
        <mt-header fixed title="比赛详情">
            <router-link :to="back" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
export default {
    name: 'gameDetail',
    data() {
        return {
            
        }
    },
    methods: {
        back(){
            // this.$route.go(-1)
            this.$route.back(-1)
        }
    }

}
</script>

<style scoped>
.mint-header {
    background-color: #14B9C8;
    font-size: 18px
}
</style>
