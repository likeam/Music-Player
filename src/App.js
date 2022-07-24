import { useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
//Import Utill
import data from "./util";

//Adding components


function App() {


  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, serCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song  currentSong={currentSong} />
      <Player  isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong ={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
