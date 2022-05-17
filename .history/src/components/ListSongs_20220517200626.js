import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Songs } from '../Context';

export default function ListSongs() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setidSong(idSong);
        handleSetSong(idSong);
    };
    useEffect(() => {
        setidSong(song.id);
    }, [song]);
    return (
        <div className="col-span-2 overflow-y-scroll sm:overflow-y-scroll absolute top-96 pb-12 lg:pb-0 lg:relative lg:top-0">
            <table className="table-auto w-full ">
                <thead className="text-white h-12">
                    <th className="w-[5%]">#</th>
                    <th className="w-[20%] text-left">Title</th>
                    <th className="w-[30%]">Author</th>
                    <th className="w-[5%]">
                        <i className="fa fa-download" aria-hidden="true"></i>
                    </th>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 pointer ${
                                idSong === song.id && 'bg-slate-600 text-teal-400'
                            }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className="fa fa-download"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
