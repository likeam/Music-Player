import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
//Import Utill
import data from "./util";

//Adding components


function App() {


  //State
  const[songs, setSongs] = useState(data());
  const[currentSong, serCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song  currentSong={currentSong} />
      <Player  currentSong ={currentSong} />
    </div>
  );
}

export default App;
