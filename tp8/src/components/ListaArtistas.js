import React from 'react';
import Artista from './Artista'

const ListaArtistas = ({ artistas }) => (
    <div className='row'>
        {artistas.map(artista => (<Artista key={artista.url} artista={ artista }></Artista>))}
    </div>
)

export default ListaArtistas;