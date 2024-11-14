
import React, { useRef } from "react";
import './App.css';
import useVideoPlayer from "./hooks/useVideoPlayer";


const App = () => {
    const videoElement = useRef(null);
    const {
        togglePlay,
    } = useVideoPlayer(videoElement);
    return (
        <div className="container">
            <div class="frame">  
                <span id="currentFrame">0</span>
            </div>

            <video height="180" width="100%" id="video"> 
                <source src="http://www.w3schools.com/html/mov_bbb.mp4"></source>
            </video>
            <div id="controls">
                <button id="play-pause" onClick={togglePlay}>Play</button>
            </div>
        </div>
    );
}

export default App;
