import React from 'react';
import './video.css'
import '../../api/youtube'

const VideoDetail=({video, handleVideoSelect}) => {
    if(!video){
        return <div>Search for more videos</div>
    }

    
    
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return(
            <div>
                <div className="video-item">
                    <iframe title="video player" src={videosrc}/>
                </div>
                <div className="video-item item">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
}

export default VideoDetail