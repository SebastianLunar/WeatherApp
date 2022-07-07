import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { badgesReducers } from "../reducers/badgesReducers";
import { loginReducer } from "../reducers/loginReducers";
import { registerReducer } from "../reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    loginStore: loginReducer, 
    registerStore: registerReducer,
    badgesStore: badgesReducers,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)