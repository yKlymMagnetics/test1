import {SET_USERS_MUTATION} from './types';

const mutations = {
    [SET_USERS_MUTATION](state, users){
        state.users = users
    }
}

export {mutations}