import React from 'react';

import './ImageContainer.css';


interface IImageContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    href: string;
}

function ImageContainer({ className, href, children, ...props }: IImageContainerProps) {
    const ownClassName = "image-container";
    return (
        <div
            className={className ? `${ownClassName} ${className}` : ownClassName}
            {...props}
        >
            <a href={href}>
                {children}
            </a>
        </div>
    );
}

export default ImageContainer;
