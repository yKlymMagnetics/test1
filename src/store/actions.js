import { LOAD_USER_ACTION, SET_USERS_MUTATION } from './types';

const actions = {
    async [LOAD_USER_ACTION]({ commit }) {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const parsedUsers = await users.json();
        commit(SET_USERS_MUTATION, parsedUsers);
    }
};

export { actions };

