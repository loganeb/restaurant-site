import Vuex from 'vuex';
import { APPETIZERS } from "../static/items";

const createStore = () => {
    return new Vuex.Store({
        state: state,
        mutations: mutations,
        actions: actions,
    })
}

const state = () => ({
    appetizers: [],
    entrees: [],
    sides: [],
    drinks: [],
    desserts: [],
    specials: []
});

const mutations = {
    setItems(state, payload){
        state[payload.key] = payload.itemArray;
    }
}

const actions = {
    loadItems(context){
        context.commit('setItems', {key: 'appetizers', itemArray: APPETIZERS});
    }
}

export default createStore;