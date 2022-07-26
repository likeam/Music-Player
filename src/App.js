import { useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav';
import { useRef } from 'react';
import './styles/app.scss';
//Import Utill
import data from "./util";

//Adding components


function App() {

  //Ref
  const audioRef = useRef(null);

  
    //State
    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
  });


  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime ;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
};


  //State
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song  currentSong={currentSong} />
      <Player  isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong ={currentSong} audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo} />
      <Library libraryStatus={libraryStatus} songs={songs} setCurrentSong = {setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>   
    </div>
  );
}

export default App;
