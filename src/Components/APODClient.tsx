import React from 'react';

import { APODArticle } from '.';


const article = { "date": "2019-01-03", "explanation": "On January 1 New Horizons encountered the Kuiper Belt object nicknamed Ultima Thule. Some 6.5 billion kilometers from the Sun, Ultima Thule is the most distant world ever explored by a spacecraft from Earth. This historic image, the highest resolution image released so far, was made at a range of about 28,000 kilometers only 30 minutes before the New Horizons closest approach. Likely the result of a gentle collision shortly after the birth of the Solar System, Ultima Thule is revealed to be a contact binary, two connected sphere-like shapes held in contact by mutual gravity. Dubbed separately by the science team Ultima and Thule, the larger lobe Ultima is about 19 kilometers in diameter. Smaller Thule is 14 kilometers across.  News: New Horizons science results briefing.", "hdurl": "https://apod.nasa.gov/apod/image/1901/20190102UltimaThule-pr.png", "media_type": "image", "service_version": "v1", "title": "Ultima and Thule", "url": "https://apod.nasa.gov/apod/image/1901/20190102UltimaThule-pr600.jpg" }

export default function APODClient() {
    return (
        <div id="APODClient">
            <APODArticle article={article} />
        </div>
    );
}
