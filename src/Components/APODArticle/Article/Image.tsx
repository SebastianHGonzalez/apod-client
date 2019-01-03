import React from 'react';

import { ImageContainer } from '.';


interface IImageProps extends React.Props<any> {
    url: string;
    hdurl: string;
}

function Image({ url, hdurl }: IImageProps) {
    return (
        <ImageContainer>
            <img src={url} />
        </ImageContainer>
    );
}

export default Image;
