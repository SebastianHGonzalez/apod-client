import IArticle from "../../Models/IArticle";
import { Action } from "redux";
import { IState, initialState } from ".";
import actions from "../Actions";

function articleReducer(state: IState = initialState, { type, ...payload }: Action) {
    switch (type) {
        case actions.types.fetchArticle:
            return {
                ...state,
                article: {
                    ...state.article,
                    fetching: true,
                }
            }
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
