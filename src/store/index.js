import Vue from 'vue'
import Vuex from 'vuex'
import getData from '../actions/getData'
Vue.use(Vuex);
//初始化
const defaultState = {
    user: {},
    topics: {},
    userImg: "static/defaultUserImg.png",
    tabBarSelected: '生活'
}

const store = new Vuex.Store({
    state: Object.assign({}, defaultState),  //不能直接赋值为defaultStore，不然defaultStore会跟着变化
    mutations: {
        login(state, user) {
            state.user = user
            state.userImg = "static/userimg.jpg";
        },
        loginout(state) {
            Object.assign(state, defaultState);
        },
        MgetTopics(state, response) {
            console.log(response.status);
            if (response.status == 200) {
                state.topics = response.data.data
            } else {
                console.log(response);
            }
        },
        tabBarSelected(state, select) {
            state.tabBarSelected = select;
        }
    },
    actions: {
        async AgetTopics({ commit, state }, data) {
            let res = getData(data.this, data.page);
            console.log('res:');
            console.log(res);
            commit('MgetTopics',await res);
        },
    }
})

export default store