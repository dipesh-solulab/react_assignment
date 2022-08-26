import { createStore } from "redux";
import rootReducer from "./Redux/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// redux-persist is used for localstorage..
const persistConfuguration = {
  key: "Add_All_Datas",
  storage,
};

// persist reducer
const persist_Reducer = persistReducer(persistConfuguration, rootReducer);

const store = createStore(
  persist_Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persist_store = persistStore(store);
export default store;
