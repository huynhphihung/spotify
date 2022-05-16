import React from 'react';
import AudioPlayer

export default function Playing() {
    return (
        <div>
            <AudioPlayer src={SAMPLE_MP3_URL} layout="stacked-reverse" />
        </div>
    );
}
