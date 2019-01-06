import React from 'react';

import { APODArticle } from '.';
import { Spinner } from './Common';
import IArticle from '../Models/IArticle';
import IAPODApiClient from '../Clients/IAPODApiClient';


interface IAPODClientProps extends React.Props<any> {
    apodApiClient: IAPODApiClient;
}

interface IAPODClientState {
    article: IArticle | null;
}

export default class APODClient extends React.Component<IAPODClientProps, IAPODClientState> {

    constructor(props: IAPODClientProps) {
        super(props);

        this.state = {
            article: null
        }

        this.fetchArticle();
    }

    private fetchArticle() {
        const api = this.props.apodApiClient;

        api.fetchArticle().then((article: IArticle) => {
            this.setArticle(article);
        });
    }

    private setArticle(article: IArticle) {
        this.setState({ article });
    }

    public render() {
        const article = this.state.article;

        return (
            <div id="APODClient">
                {article ? <APODArticle article={article} /> : <Spinner />}
            </div>
        );
    }
}
