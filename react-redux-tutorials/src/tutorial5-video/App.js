import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from './api/youtube';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtube.get('/search', {
            params: {
                q: 'tree'
            }
        }).then((response) => {
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })
        }
    }

    onInputSubmit = async videoName => {
        const response = await youtube.get('/search', {
            params: {
                q: videoName
            }
        })

        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoClick = (clickedVideo) => {
        this.setState({ selectedVideo: clickedVideo })
    }

    render() {
        return (
            <div className="ui container" >
                <SearchBar onInputSubmit={this.onInputSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo} />

                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoClick={this.onVideoClick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;