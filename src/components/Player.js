import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleRight, faPause, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


export default function Player({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, setSongs}) {

    //UserEffect
    useEffect(() =>{
         //Add Active State 
         const newSongs  = songs.map((song) => {
            if(song.id === currentSong.id){
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

    },[currentSong]);

    
    //Event Handler
    const playSongHandler = () =>{

        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
        
            audioRef.current.play();
            setIsPlaying(!isPlaying);
            
        }
    };



    const dragHandler = (e) => {

        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})

    }

    const getTime = (time) => {

        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    const skipTrackHandler = (direction) =>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1)% songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex -1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1)% songs.length]);
        }
    };


    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className='skip-back' size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler('skip-back')} />
            <FontAwesomeIcon onClick={playSongHandler} className='play' size="2x"  icon={isPlaying ? faPause : faPlay} />           
            <FontAwesomeIcon className='skip-forward' size="2x"  icon={faAngleRight} onClick={() => skipTrackHandler('skip-forward')} />
            </div>   
            
        </div>
    )
}   
