import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootSaga from './Sagas';
import rootReducer from './Reducers';


const context: any = window
const composeEnhancers = context.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware,
];

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            ...middlewares
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;
