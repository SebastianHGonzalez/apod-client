import IArticle from "../../Models/IArticle";
import { Action } from "redux";
import { IState, initialState } from ".";
import actions from "../Actions";


function articleReducer(state: IState = initialState, { type, ...payload }: Action & any): IState {
    switch (type) {
        case actions.types.fetchArticle.start:
            return {
                ...state,
                article: {
                    ...state.article,
                    fetching: true,
                }
            };
        case actions.types.fetchArticle.success:
            return {
                ...state,
                article: {
                    ...state.article,
                    fetching: false,
                    data: payload.article,
                }
            };
        case actions.types.fetchArticle.error:
            return {
                ...state,
                article: {
                    ...state.article,
                    fetching: false,
                    error: payload.error
                }
            };
        default:
            return state;
    }
}

export interface IArticleState {
    data?: IArticle;
    fetching: boolean;
    error?: Error;
}

export default articleReducer;
