import React from 'react';

export default function ListSongs() {
    return (
        <div className="col-span-2">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <th>#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]">
                        <i class="fa fa-download" aria-hidden="true"></i>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-white'>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
