import Vue from 'vue'
import Vuex from 'vuex'
import flats from './modules/flats.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        flats,
        user
    }
})