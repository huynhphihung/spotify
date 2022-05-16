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
                        <tr key={inedx}>
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">1</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
