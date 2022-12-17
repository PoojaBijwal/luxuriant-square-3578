import { legacy_createStore, combineReducers, compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {AdminReducer} from "./Admin/admin.reducer";


const rootReducer = combineReducers({
  admin : AdminReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));