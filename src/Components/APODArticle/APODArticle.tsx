import React from 'react';

import { Title, Body, ImageContainer } from './Article';


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

function APODArticle({ article: {
    title,
    explanation,
    url,
    hdurl
} }: IAPODArticleProps) {
    return (
        <div className="article">
            <Title>
                {title}
            </Title>
            <ImageContainer>
                <img src={url} />
            </ImageContainer>
            <Body>
                {explanation}
            </Body>
        </div>
    );
}

export default APODArticle;
