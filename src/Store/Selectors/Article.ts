
export function getCurrentArticle({ article: { article: { data } } }: any) {
    return data;
}

export function isFetchingArticle({ article: { article: { fetching } } }: any) {
    return fetching;
}

export function getError({ article: { article: { error } } }: any) {
    return error;
}
