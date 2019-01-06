import React from 'react';

import { APODArticle } from '.';
import { Spinner, Error } from './Common';
import IArticle from '../Models/IArticle';
import IAPODApiClient from '../Clients/IAPODApiClient';


interface IAPODClientProps extends React.Props<any> {
    apodApiClient: IAPODApiClient;
}

interface IAPODClientState {
    article: IArticle | null;
    error: Error | null;
}

export default class APODClient extends React.Component<IAPODClientProps, IAPODClientState> {

    constructor(props: IAPODClientProps) {
        super(props);

        this.state = {
            article: null,
            error: null,
        }

        this.fetchArticle();
    }

    private fetchArticle() {
        const api = this.props.apodApiClient;

        api.fetchArticle().then((article: IArticle) => {
            this.setArticle(article);
        }).catch((err: Error) => {
            this.setError(err);
        });
    }

    private setArticle(article: IArticle) {
        this.setState({ article });
    }

    private setError(error: Error) {
        this.setState({ error });
    }

    public render() {
        const { article, error } = this.state;

        return (
            <div id="APODClient">
                {article ? <APODArticle article={article} /> : error && <Error error={error} /> || <Spinner />}
            </div>
        );
    }
}
