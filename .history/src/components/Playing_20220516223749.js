import React from 'react';
import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Songs } from '../Context';

export default function Playing() {
    const { song, handleSetSong } = useContext(Songs);
    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };

    const handleClickPrev = () => {
        handleSetSong(song.id - 1);
    };
    const handlePauseSong = () => {
        hand
    };
    return (
        <div>
            <AudioPlayer
                className="player-music"
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrev}
                onEnded={handlePauseSong}
            />
        </div>
    );
}
