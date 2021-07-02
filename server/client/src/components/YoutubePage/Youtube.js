import React from 'react'
import './Youtube.css'
import SearchBar from './SearchBar'
import youtube from '../../api/youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import Particles from 'react-particles-js';

class Youtube extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    }
    
    handleSubmit = async(termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        });
        this.setState({
            videos: response.data.items,
        });
    };
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render(){
        return(
            <div className="main-body">
                <SearchBar handleFormSubmit={this.handleSubmit} />
                <div className="ui grid">
                    <div className="main-video">
                <iframe className="frame" width="650" height="400" src="https://www.youtube.com/embed/8NgVGnX4KOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div>
                        <div>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="input-group">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                    </div>
                </div>
                </div>
        )
    }

}
export default Youtube