import React from 'react';
import { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className="col-span-1 p-3 bg-slate-500 fixed w-full">
            <h2 className="text-cyan-500 font-bold text-center">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl text-center">{song.name}</h2>
            <div className="w-[120px] m-auto mt-3 sm:w-[240px]">
                <img className="w-full rounded-full" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-4">
                <img className="hidden sm:block w-[70px] rounded-full" src={song.links.images[1].url} alt="avatar" />
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    );
}
