import React from 'react';
import './video.css'
import '../../api/youtube'

const VideoDetail=({video, handleVideoSelect}) => {
    if(!video){
        return <div><br />Search for more videos</div>
    }

    
    
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return(
            <div>
                <div className="video-item">
                    <iframe className="selected-video" width="560" height="315" title="video player" src={videosrc}/>
                </div>
                <div className="video-item item">
                    <h4 className="selected-video-title">{video.snippet.title}</h4>
                    <p className="selected-video-desc">DESCRIPTION : <br />{video.snippet.description}</p>
                </div>
            </div>
        )
}

export default VideoDetail