import { all, Effect } from "redux-saga/effects";

const sagas: Effect[] = [

];

function* rootSaga() {
    yield all(sagas)
}

export default rootSaga;
