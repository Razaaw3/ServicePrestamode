import {applyMiddleware,compose,createStore} from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
const initstate={};
const middlewares=[thunk];


const store = createStore(
    rootReducer,
    initstate,
    compose(
        applyMiddleware(...middlewares)
    )
);


export default store;
