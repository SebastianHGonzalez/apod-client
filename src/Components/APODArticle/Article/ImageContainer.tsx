import React from 'react';

interface IImageContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function ImageContainer({ className, ...props }: IImageContainerProps) {
    const ownClassName = "image-container";
    return (
        <div 
        className={className ? `${ownClassName} ${className}` : ownClassName} 
        {...props} 
        />
    );
}

export default ImageContainer;
