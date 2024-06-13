import './App.css';
import Login from './Login.js'
import React, {useEffect, useState} from 'react';
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from "spotify-web-api-js"

function App() {
  const spotify = new SpotifyWebApi ()
  const [token, setToken] = useState(null)
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    console.log("I have a token", hash)
    const _token = hash.access_token
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(user =>{
        console.log(user)
      })
    }
  }, [])
  return (
    <div className="App">
      {
        token?
        (<h1>I am logged in</h1>):
        (<Login />)
      }
      
    </div>
  );
}

export default App;
