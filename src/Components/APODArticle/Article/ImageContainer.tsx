import React from 'react';


interface IImageContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function ImageContainer({ className, ...props }: IImageContainerProps) {
    return (
        <div className={"imageContainer " + className} {...props} />
    );
}

export default ImageContainer;
