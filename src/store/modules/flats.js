export default {
    actions: {
        addFavoritesAction(ctx, id) {
            ctx.commit('addFavoritesMutation', id)
        },
        getFlatAction(ctx, id) {
            ctx.commit('getFlatMutation', id)
        }
    },
    mutations: {
        getFlatMutation(state, id) {
            state.currentFlat = state.flats.filter(fl => fl.id === +id)
        },
        addFavoritesMutation(state, id) {
            state.flats = state.flats.map(fl => {
                if(fl.id === id) {
                    fl.favorites = !fl.favorites
                }
                return fl
            })
        }
    },
    state: {
        flats: [
            {id: 1, title: '2-Комнатная', square: 32, price: 2000000 + 'руб', desc: '1-Test description', phone: '8-981-509-52-19', favorites: false},
            {id: 2, title: '1-Комнатная',  square: 24, price: 1000000 + 'руб', desc: '2-Test description', phone: '8-981-508-22-59', favorites: false},
            {id: 3, title: '3-Комнатная', square: 64, price: 3500000 + 'руб', desc: '3-Test description', phone: '8-981-519-92-89', favorites: false},
            {id: 4, title: '5-Комнатная', square: 89, price: 5500000 + 'руб', desc: '4-Test description', phone: '8-981-541-23-09', favorites: false}
        ],
        currentFlat:[]
    },
    getters: {
        getFlats(state) {
            return state.flats
        },
        getFavorites(state) {
            return state.flats.filter(fl => fl.favorites === true)
        }
    },
}