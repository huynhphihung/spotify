import React from 'react';

export default function DetailSong() {
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-600-700 text-2xl">Sing me to sleep</h2>
            <div>
                <img src="https://source.unsplash.com/random" alt="avatar" />
            </div>
            <div>
                <img src="https://source.unsplash.com/random" alt="avatar" />
                <span></span>
            </div>
        </div>
    );
}