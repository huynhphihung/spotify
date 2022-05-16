import React from 'react';

export default function DetailSong() {
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-600-700 text-2xl">Sing me to sleep</h2>
            <div className="w-[240px] mr-auto mt-10">
                <img className='w-full' src="https://source.unsplash.com/random" alt="avatar" />
            </div>
            <div className='flex justify-evenly items-center'>
                <img className='w-[70px]' src="https://source.unsplash.com/random" alt="avatar" />
                <span className="text-xl">Alan Walker</span>
            </div>
        </div>
    );
}
