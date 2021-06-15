import React from 'react'
import './Youtube.css'
import SearchBar from './SearchBar'
import youtube from '../../api/youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

// function Youtube() {
//     const API = ''
//     const channelID = ''
//     const result = 15;

//     var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=data&maxResults=${result}`;

//     return (
//     <div>
//         <SearchBar />
//         {/* <button className="btn btn-primary">Fetch more videos</button> */}
//         <div className="main-video">
//           <iframe width="560" height="315" 
//           src="https://www.youtube.com/embed/8NgVGnX4KOw" 
//           title="YouTube video player" 
//           frameborder="0" 
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//           allowfullscreen></iframe>
//         </div>
//     </div>
//     )
// }

// export default Youtube

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
            <div>
                <SearchBar handleFormSubmit={this.handleSubmit} />
                <div className="ui grid">
                    <div className="main-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8NgVGnX4KOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div>
                        <div>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Youtube