import React from 'react';
import LibrarySong from './LibrarySong';

export default function Library({songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                        <LibrarySong audioRef={audioRef}  isPlaying = {isPlaying} songs={songs} id = {song.id} setCurrentSong={setCurrentSong} song={song} key= {song.id} setSongs={setSongs} />
                ))}
            
            </div>
        </div>
    )
}
