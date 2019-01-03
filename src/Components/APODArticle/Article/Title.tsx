import React from 'react';

interface ITitleProps extends React.Props<any> {
    title: string;
}

function Title({ title }: ITitleProps) {
    return (
        <h1 className="title">
            {title}
        </h1>
    );
}

export default Title;
