import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";

import authReducer from "./modules/auth/reducer";
import uiReducer from "./modules/ui/reducer";

const rootPersistConfig = {
    key: "root",
    storage,
    blacklist: ["ui"]
    // whitelist: ["auth"]
};

const rootReducer = persistCombineReducers(rootPersistConfig, {
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore(rootReducer);

export const persistor = persistStore(store);