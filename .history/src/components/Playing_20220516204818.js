import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

export default function Playing() {
    const {song} = useCo
    return (
        <div>
            <AudioPlayer
                className="player-music"
                src=""
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
            />
        </div>
    );
}
