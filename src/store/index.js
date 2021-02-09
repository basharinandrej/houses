import Vue from 'vue'
import Vuex from 'vuex'
import Flats from './modules/flats.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Flats
    }
})