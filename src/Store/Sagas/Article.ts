import { takeEvery, call, put } from 'redux-saga/effects';

import Actions from '../Actions';
import { APODApiClient } from '../../Clients';
import config from '../../Config';


const apodApiClient = new APODApiClient(config.apodApiClient);

export default function* watcherArticleSaga() {
    yield takeEvery(Actions.types.fetchArticle.start, workerFetchArticle);
}

function* workerFetchArticle() {
    try {
        const article = yield call([apodApiClient, apodApiClient.fetchArticle]);
        yield put(Actions.creators.fetchArticle.success(article));
    } catch (e) {
        yield put(Actions.creators.fetchArticle.error(e))
    }
}
