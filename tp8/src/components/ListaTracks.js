import React from 'react';
import Track from './Track'

const ListaTracks = ({ tracks }) => (
    <div className='row'>
        {tracks.map(track => (<Track key={track.url} track={ track }></Track>))}
    </div>
)

export default ListaTracks;