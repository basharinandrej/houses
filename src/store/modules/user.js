const state = {
    admin: {
        name: '',
        avatar: '',
        isAuth: false
    }
}

const mutations = {
    isAuthMutation(state) {
        state.admin.isAuth
            = JSON.parse(localStorage.getItem('isAuth'))
        state.admin.name
            = JSON.parse(localStorage.getItem('nameAdmin'))
        state.admin.avatar
            = JSON.parse(localStorage.getItem('avatarAdmin'))
    },
    saveDataAdmin(state) {
        state.admin.name
            = JSON.parse(localStorage.getItem('nameAdmin') )
        state.admin.avatar
            = JSON.parse(localStorage.getItem('avatarAdmin') )
        state.admin.isAuth
            = JSON.parse(localStorage.getItem('isAuth') )
    }
}

export default {
    state,
    mutations
}
