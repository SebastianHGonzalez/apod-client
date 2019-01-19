import React from 'react';
import { connect } from 'react-redux';

import { APODArticle } from '.';
import { Spinner, Error } from './Common';
import { IStore } from '../Store/Reducers';
import Actions from '../Store/Actions';
import IArticle from '../Models/IArticle';


interface IAPODClientProps extends React.Props<any> {
    article?: IArticle;
    fetching: boolean;
    error?: Error;
    fetchArticle: () => void;
}

class APODClient extends React.Component<IAPODClientProps> {

    public componentDidMount() {
        this.props.fetchArticle();
    }

    public render() {
        const { article, error, fetching } = this.props;

        return (
            <div id="APODClient">
                {fetching ? <Spinner /> : error ? <Error error={error} /> : article ? <APODArticle article={article} /> : <Error />}
            </div>
        );
    }
}

function mapStateToProps({ article: { data, fetching, error } }: IStore) {
    return {
        article: data,
        fetching,
        error,
    }
}

export default connect(mapStateToProps, {
    fetchArticle: Actions.creators.fetchArticle,
})(APODClient);
