import React from 'react'

export default function ListSongs() {
  return (
    <div className='col-span-2'>
      <table className='table-auto'>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th><i className='fadow'></i></th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
