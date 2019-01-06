import React from 'react';

import './Body.css';


interface IBodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {

}

function Body({ className, ...props }: IBodyProps) {
    const ownClassName = "article-body";
    return (
        <p 
        className={className ? `${ownClassName} ${className}` : ownClassName} 
        {...props} 
        />
    );
}

export default Body;
