import React from 'react';
import { useContext } from 'react';
import { Songs } from '../Context';

export default function ListSongs() {
    const { DataSongs } = useContext(Songs);
    console.log(DataSongs);
    return (
        <div className="col-span-2">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <th>#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]">
                        <i className="fa fa-download" aria-hidden="true"></i>
                    </th>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr key={index} className="bgc-slate-800 h-12 text-gray">
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url} className="fa fa-download"></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
