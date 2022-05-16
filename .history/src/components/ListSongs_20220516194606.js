import React from 'react';

export default function ListSongs() {
    return (
        <div className="col-span-2">
            <table className="table-auto w-full">
                <thead className='tw'>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>
                        <i class="fa fa-download" aria-hidden="true"></i>
                    </th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
            </table>
        </div>
    );
}
