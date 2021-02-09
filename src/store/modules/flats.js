export default {
    actions: {},
    mutations: {},
    state: {
        flats: [
            {id: 1, title: '2-Комнатная', square: 32, price: 2000000 + 'руб', desc: '1-Test description', phone: '8-981-509-52-19'},
            {id: 2, title: '1-Комнатная', square: 24, price: 1000000 + 'руб', desc: '2-Test description', phone: '8-981-508-22-59'},
            {id: 3, title: '3-Комнатная', square: 64, price: 3500000 + 'руб', desc: '3-Test description', phone: '8-981-519-92-89'},
            {id: 4, title: '5-Комнатная', square: 89, price: 5500000 + 'руб', desc: '4-Test description', phone: '8-981-541-23-09'}
        ]
    },
    getters: {
        getFlats(state) {
            return state.flats
        }
    },
}