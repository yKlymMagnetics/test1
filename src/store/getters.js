import { USER_BY_ID_GETTER } from "./types";

const getters = {
    [USER_BY_ID_GETTER](state) {
        return (id) => state.users.find(user => user.id == id);
    }
}

export {getters}