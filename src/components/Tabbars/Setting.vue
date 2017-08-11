<template>
    <div class="tabbar_setting">
        <mt-header title="用户中心">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
export default {
    name: 'tabbar_setting',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>