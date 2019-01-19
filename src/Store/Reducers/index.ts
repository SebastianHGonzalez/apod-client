import { combineReducers } from "redux";

import article, { IArticleState } from './Article';

export const initialState: IState = {
    article: {
        fetching: false,
    },
}

export interface IState {
    article: IArticleState;
}

const reducers = {
    article,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
