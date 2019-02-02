import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        beerItemDetails: false,
        favorites: [],
        bottles: []
    },
    mutations: {
        showBeerItemDetails(state) {
            state.beerItemDetails = true;
        },

        toggleBeerItemDetails(state, value) {
            state.beerItemDetails = value;
        }
    },
    getters: {
        beerItemDetailsDialog: state => state.beerItemDetails
    },
    actions: {}
});
