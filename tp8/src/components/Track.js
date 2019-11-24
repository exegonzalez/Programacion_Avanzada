import React from 'react';

const Track = ({track}) => {

    
    const imgdefault = 'https://i1.sndcdn.com/avatars-000275256546-q1magv-t500x500.jpg'
    const { url, name, listeners } = track

    const image = track.image[3]['#text']
    const size = track.image[3].size

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                <img className="mx-auto d-block" src={ imgdefault || image } size={ 'large' || size }/>
                </div>
                
                <div className="card-content text-center">
                    <h3>{ name }</h3>
                    <p>Listeners: { listeners }</p>
                </div>
                
                <div className="card-content text-center">
                    <a href={ url } target="blank" rel="noopener noreferrer" className="waves-effect waver-light btn">Ver informacion completa</a>
                </div>
            </div>
        </div>
    )
}

export default Track;