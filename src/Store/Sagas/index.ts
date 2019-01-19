import { all, call } from "redux-saga/effects";

import articleSaga from './Article';


const sagas = [
    articleSaga,
];

function* rootSaga() {
    yield all(sagas.map(call));
}

export default rootSaga;
