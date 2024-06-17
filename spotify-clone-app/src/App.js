import './App.css';
import Login from './Login.js'
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player.js';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi()
function App() {
  
  const [token, setToken] = useState(null)
  const [{user}, dispatch] = useDataLayerValue()
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    console.log("I have a token", hash)
    const _token = hash.access_token
    if(_token){
      setToken(_token)
      
      spotify.setAccessToken(_token)
      spotify.getMe().then(user =>{
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])
  console.log(user)
  return (
    <div className="App">
      {
        token?
        (<Player />):
        (<Login />)
      }
      
    </div>
  );
}

export default App;
