import React from 'react';
import { connect } from 'react-redux';

import { APODArticle } from '.';
import { Spinner, Error } from './Common';
import { IState } from '../Store/Reducers';
import actions from '../Store/Actions';
import IArticle from '../Models/IArticle';
import {
    getCurrentArticle,
    isFetchingArticle,
    getError,
} from '../Store/Selectors';


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

function mapStateToProps(state: IState) {
    return ({
        article: getCurrentArticle(state),
        fetching: isFetchingArticle(state),
        error: getError(state),
    });
}

export default connect(mapStateToProps, {
    fetchArticle: actions.creators.fetchArticle,
})(APODClient);
