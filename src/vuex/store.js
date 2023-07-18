// src/vuex/store.js
import {createStore} from "vuex";
import getters from "./getters";
import mutations from "./mutation";
import actions from "./actions";    //추가

export const store = createStore({
    state: {
        user: null,
        isLogin: false,
        loadingStatus: false,
    },
    mutations,
    getters,
    actions
});