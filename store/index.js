import Vuex from 'vuex';
import { APPETIZERS, ENTREES, SIDES } from "../static/items";

const createStore = () => {
    return new Vuex.Store({
        state: state,
        mutations: mutations,
        actions: actions,
        getters: getters,
    })
}

const state = () => ({
    sections: {
        appetizers:{
            name: 'Appetizers',
            items: []
        },
        entrees:{
            name: 'Entrees',
            items: []
        },
        sides:{
            name: 'Sides',
            items: []
        },
        specials:{
            name: 'Specials',
            items: []
        },
        drinks:{
            name: 'Drinks',
            items: []
        },
        desserts:{
            name: 'Desserts',
            items: []
        }
    },
    selection: {},
    hours:[
        {
            day: 'Sunday',
            open: 11,
            close: 23
        },
        {
            day: 'Monday',
            open: 13,
            close: 22
        },
        {
            day: 'Tuesday',
            open: 13,
            close: 22
        },
        {
            day: 'Wednesday',
            open: 13,
            close: 22
        },
        {
            day: 'Thursday',
            open: 13,
            close: 22
        },
        {
            day: 'Friday',
            open: 13,
            close: 23
        },
        {
            day: 'Saturday',
            open: 9,
            close: 23
        }
    ]
});

const mutations = {
    setItems(state, payload){
        state.sections[payload.key].items = payload.itemArray;
        state.selection = state.sections[payload.key];
    },
    setSelection(state, key){
        state.selection = state.sections[key];
    }
}

const actions = {
    loadItems(context){
        context.commit('setItems', {key: 'entrees', itemArray: ENTREES});
        context.commit('setItems', {key: 'sides', itemArray: SIDES});
        context.commit('setItems', {key: 'appetizers', itemArray: APPETIZERS});
    }
}

const getters = {
    getSection(state, name){
        return state.sections[name];
    }
}

export default createStore;