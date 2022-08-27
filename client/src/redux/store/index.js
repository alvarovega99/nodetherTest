import { createStore, applyMiddleware, compose } from "redux";
import Reducer from '../reducer/reducer';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
