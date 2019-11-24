import React from 'react';

const Album = ({album}) => {
  
    const imgdefault = 'https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2016/11/Music.jpg'
    const { url, name, playcount } = album

    const image = album.image[3]['#text']
    const size = album.image[3].size

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img className="mx-auto d-block" src={ imgdefault || image } size={ 'large' || size }/>
                </div>
                
                <div className="card-content text-center">
                    <h3>{ name }</h3>
                    <p>Playcount: { playcount }</p>
                </div>
                
                <div className="card-content text-center">
                    <a href={ url } target="blank" rel="noopener noreferrer" className="waves-effect waver-light btn">Ver informacion completa</a>
                </div>
            </div>
        </div>
    )
}

export default Album;