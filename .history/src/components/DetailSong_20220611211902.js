import React from 'react';
import { useContext } from 'react';
import { Songs } from '../Context';

import './index.css';

export default function DetailSong() {
    const { song } = useContext(Songs);

    const []

    return (
        <div className="col-span-1 p-3 bg-slate-700 fixed w-full top-24 z-40 lg:relative lg:top-0 md:relative md:top-0">
            <h2 className="text-cyan-500 font-bold text-center lg:text-left">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl text-center lg:text-left">{song.name}</h2>
            <div className="w-[120px] m-auto mt-3 sm:w-[180px]">
                <img className="w-full rounded-full" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-4">
                <img className="hidden sm:block w-[70px] rounded-full" src={song.links.images[1].url} alt="avatar" />
                <span className="text-xl text-white">{song.author}</span>
            </div>
            <button onClick={() => {}} className="text-white text-center text-xl lyric-title">
                <div>Lyrics</div>
            </button>
            <div className="text-cyan-500 mt-4 w-52 lyrics sm:hidden md:block xl:block">{song.lyric}</div>
        </div>
    );
}
