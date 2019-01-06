import React from 'react';

interface IImageContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    href: string;
}

function ImageContainer({ className, href, ...props }: IImageContainerProps) {
    const ownClassName = "image-container";
    return (
        <a href={href}>
            <div
                className={className ? `${ownClassName} ${className}` : ownClassName}
                {...props}
            />
        </a>
    );
}

export default ImageContainer;
