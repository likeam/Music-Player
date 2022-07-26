import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, id, audioRef, isPlaying}) {
    const songSelectHandler = async() =>{
    
        await setCurrentSong(song);
        audioRef.current.play();
        //check if this song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) =>{
                    audioRef.current.paly();
                })
            }
        }
    }
    return (
    
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} />
            <div className="song-discription">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    
    )
}
