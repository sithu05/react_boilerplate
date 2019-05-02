import { persistStore } from "redux-persist";
import { createStore, combineReducers } from "redux";

import authReducer from "./modules/auth/reducer";
import uiReducer from "./modules/ui/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore(rootReducer);

export const persistor = persistStore(store);