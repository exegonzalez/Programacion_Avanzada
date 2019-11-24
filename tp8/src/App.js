import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header';
import ListaArtistas from './components/ListaArtistas';
import ListaTracks from './components/ListaTracks';
import ListaAlbums from './components/ListaAlbums';

class App extends Component {

  state = {
    artistas: [],
    tracks: [],
    albums: [],
    primerartista: ''
  }
   
  topArtistas = async () => {
    const APPID = '9df879bb140e3769de0bd63a211e2d2b';
    const lastfmapi = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${APPID}&format=json`;
    const respuesta = await axios.get(lastfmapi);
    const artistas = await respuesta.data.artists.artist;

    this.setState({ primerartista: artistas[0].name })    
    this.setState({ artistas: artistas })  
  }

  topTracks = async () => {
    const APPID = '9df879bb140e3769de0bd63a211e2d2b';
    const lastfmapi = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${APPID}&format=json`;
    const respuesta = await axios.get(lastfmapi);
    const tracks = await respuesta.data.tracks.track;
    
    this.setState({ tracks: tracks})
  }

  
  topAlbums = async (artista) => {
    const APPID = '9df879bb140e3769de0bd63a211e2d2b';
    const lastfmapi = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artista}&api_key=${APPID}&format=json`;
    const respuesta = await axios.get(lastfmapi);
    const albums = await respuesta.data.topalbums.album;    

    this.setState({ albums: albums })
  }


  componentDidMount(){
    const artistasLS = localStorage.getItem('artistas')
    const tracksLS = localStorage.getItem('tracks')
    const albumsLS = localStorage.getItem('albums')
    const primerartistaLS = localStorage.getItem('primerartista')
    
    this.topArtistas()
    this.topTracks()  
    this.topAlbums(JSON.parse(primerartistaLS))

    if(artistasLS) this.setState({ artistas: JSON.parse(artistasLS) })
    if(tracksLS) this.setState({ tracks: JSON.parse(tracksLS) })
    if(albumsLS) this.setState({ albums: JSON.parse(albumsLS) })
    if(primerartistaLS) this.setState({ primerartista: JSON.parse(artistasLS)[0].name })
  }

  componentDidUpdate() {
    localStorage.setItem('artistas', JSON.stringify(this.state.artistas))
    localStorage.setItem('tracks', JSON.stringify(this.state.tracks))
    localStorage.setItem('albums', JSON.stringify(this.state.albums))
    localStorage.setItem('primerartista', JSON.stringify(this.state.primerartista))
  }
  
  render() {
    return(

      <Router>
        <Header/>
          <Switch>
            <Route
                exact path="/toptracks"
                render={ () => (
                  <ListaTracks
                    tracks = { this.state.tracks }
                  />
                )}
            />

            <Route
                exact path="/albums"
                render={ () => (
                  <ListaAlbums
                    albums = { this.state.albums }
                  />
                )}
            />
            
            <Route 
            exact path="/topartistas"
            render = { () => (
                <ListaArtistas
                  artistas = { this.state.artistas }
                />
              )}
            />

            <Redirect from="/" to="/topartistas" />
            <Route path="/topartistas" component={ListaArtistas} />
          </Switch>
      </Router>
    );
  }

}

export default App;
