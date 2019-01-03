import React from 'react';

import { Title } from './Article';


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

function APODArticle({ article: { title } }: IAPODArticleProps) {
    return (
        <div className="article">
            <Title title={title} />
        </div>
    );
}

export default APODArticle;
