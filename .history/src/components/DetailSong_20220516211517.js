import React from 'react';

export default function DetailSong() {
    const {song} = useCo
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
            <div className="w-[240px] m-auto mt-10">
                <img
                    className="w-full"
                    src="https://i.pinimg.com/originals/c4/8e/d8/c48ed873027e8a991b0ff7058209fd5b.jpg"
                    alt="avatar"
                />
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <img
                    className="w-[70px] rounded-full"
                    src="https://i.pinimg.com/originals/c4/8e/d8/c48ed873027e8a991b0ff7058209fd5b.jpg"
                    alt="avatar"
                />
                <span className="text-xl text-white">Alan Walker</span>
            </div>
        </div>
    );
}
