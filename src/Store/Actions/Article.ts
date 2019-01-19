import IArticle from "../../Models/IArticle";

const types = {
    fetchArticle: {
        start: "FETCH_ARTICLE_START",
        success: "FETCH_ARTICLE_SUCCESS",
        error: "FETCH_ARTICLE_ERROR",
    },
}

const creators = {
    fetchArticle: {
        start: () => ({ type: types.fetchArticle.start }),
        success: (article: IArticle) => ({ type: types.fetchArticle.success, article }),
        error: (error: Error) => ({ type: types.fetchArticle.error, error }),
    },
}

export default {
    types,
    creators,
}