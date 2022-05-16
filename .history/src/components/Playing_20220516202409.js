import React from 'react';
import AudioPlayer from 'react-h5-audio-player'

export default function Playing() {
    return (
        <div>
            <AudioPlayer className='bg-gray-900' src='' layout="stacked-reverse" />
        </div>
    );
}
