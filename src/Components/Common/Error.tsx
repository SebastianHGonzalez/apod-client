import React from 'react';

import './Error.css';


interface IErrorProps extends React.Props<any> {
    error?: Error;
}

function Error({ error }: IErrorProps) {
    return (
        <div className="error">
            <strong>
                Error:
            </strong>
            {` ${error ? error.message : "Unexpected Error"}`}
        </div>
    );
}

export default Error;
