import React from 'react';


interface IErrorProps extends React.Props<any> {
    error: Error;
}

function Error({error}: IErrorProps) {
    return (
        <div className="error">
            {error.message}
        </div>
    );
}

export default Error;
