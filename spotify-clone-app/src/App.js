import './App.css';
import Login from './Login.js'
import React, {useEffect} from 'react';
import { getTokenFromUrl } from './Spotify.js';

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I have a token", token)
  }, [])
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
