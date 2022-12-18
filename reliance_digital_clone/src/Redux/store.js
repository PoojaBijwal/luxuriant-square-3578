import { legacy_createStore, combineReducers, compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import {AdminReducer} from "./Admin/admin.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  admin : AdminReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));


