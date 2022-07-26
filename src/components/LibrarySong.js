import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) {
    const songSelectHandler = async() =>{
    
        await setCurrentSong(song);
        audioRef.current.play();

        //Add Active State 
        const newSongs  = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                };
                } else {
                    return{
                        ...song,
                    active: false,
                    };
                }
            }
        );
            setSongs(newSongs);
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
    
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': "" }`}>
            <img src={song.cover} />
            <div className="song-discription">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    
    )
}
