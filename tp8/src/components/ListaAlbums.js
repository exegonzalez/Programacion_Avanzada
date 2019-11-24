import React from 'react';
import Album from './Album'

const ListaAlbums = ({ albums }) => (
    <div className='row'>
        {albums.map(album => (<Album key={album.url} album={ album }></Album>))}
    </div>
)

export default ListaAlbums;