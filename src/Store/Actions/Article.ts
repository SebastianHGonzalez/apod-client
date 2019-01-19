const types = {
    fetchArticle: "FETCH_ARTICLE",
}

const creators = {
    fetchArticle: () => ({ type: types.fetchArticle}),
}

export default {
    types,
    creators,
}