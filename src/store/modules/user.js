const state = {
    admin: {
        name: '',
        avatar: '',
        fetchDataUser: false
    }
}

const actions = {
    getInfoUserStart(cxt) {
        cxt.commit('getStartDataUser')
    },
    async getInfoUser(cxt) {
        try{
            const response = await fetch('https://houses-881f7-default-rtdb.firebaseio.com/users/admin.json')
            const data = await response.json()

            cxt.commit('getSuccessDataUser', data)

            // if(!cxt.state.admin.fetchDataUser) {
            //     cxt.commit('saveDataAdminLocalStore', data)
            // }
        } catch (e) {
            cxt.commit('getFailureDataUser', e)
        }
    }
}

const mutations = {
    getStartDataUser(state) {
        state.admin.fetchDataUser = false
        state.admin.name = ''
        state.admin.avatar = ''
    },
    getSuccessDataUser(state, payload) {
        state.admin.name = payload.name
        state.admin.avatar = payload.avatar
        state.admin.fetchDataUser = true
    },
    getFailureDataUser(state, payload) {
        console.log(state.admin.fetchDataUser);
        state.admin.fetchDataUser = false
        console.log('Error_Fetch_User', payload)
    },
    saveDataAdminLocalStore(_, payload) {
        payload.name
            ? localStorage.setItem('nameAdmin', JSON.stringify(payload.name))
            : null
        payload.avatar
            ? localStorage.setItem('avatarAdmin', JSON.stringify(payload.avatar))
            : null
    }
}



export default {
    state,
    mutations,
    actions
}