const actions = {
     getFlatsAction: async function(cxt) {
         if( !cxt.state.fetchFlats ) {
             try {
                 const response = await fetch('https://houses-881f7-default-rtdb.firebaseio.com/flats.json')
                 const data = await response.json()
                 cxt.commit('getSuccessFlatsMutation', data)
             } catch (e) {
                 cxt.commit('getFailureFlatsMutation', [])
                 console.log('Error_Fetch', e)
             }
         }
    }
}

const mutations = {
    getSuccessFlatsMutation(state, payload) {
        state.items = payload
        state.fetchFlats = true
    },
    getFailureFlatsMutation(state, payload) {
        state.items = payload
        state.fetchFlats = false
    },
    addFavorites(state, payload) {
        state.items.find(el => el.id === payload ? el.favorites = !el.favorites : null)
    },
    currentFlat(state, payload) {
        state.currentFlat = state.items.find(el => el.id === +payload)
    }
}

const getters = {
    getFavorites(state) {
        return state.items.filter(el => el.favorites === true)
    }
}

const state = {
    items: [],
    fetchFlats: false
}

export default {
    actions,
    mutations,
    state,
    getters
}