import React from 'react';

import { Title, Explanation } from './Article';


interface IArticle {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

interface IAPODArticleProps extends React.Props<any> {
    article: IArticle;
}

function APODArticle({ article: { title, explanation } }: IAPODArticleProps) {
    return (
        <div className="article">
            <Title title={title} />
            <Explanation explanation={explanation} />
        </div>
    );
}

export default APODArticle;
