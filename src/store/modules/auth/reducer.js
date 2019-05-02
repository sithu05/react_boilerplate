import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AUTH_CURRENT_USER } from "./types";

const initialState = {
    currentUser: null,
    isLogin: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_CURRENT_USER:
            return { ...state, currentUser: action.payload };

        default:
            return state;
    }
};

const persistConfig = {
    key: "auth",
    storage,
    blacklist: ["isLogin"]
};

export default persistReducer(persistConfig, reducer);