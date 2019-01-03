import React from 'react';

interface ITitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

function Title({ className, ...props }: ITitleProps) {
    const ownClassName = "article-title";
    return (
        <h1 
        className={className ? `${ownClassName} ${className}` : ownClassName} 
        {...props} 
        />
    );
}

export default Title;
