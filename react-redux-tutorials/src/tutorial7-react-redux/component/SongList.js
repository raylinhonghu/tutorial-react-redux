import React from 'react';
// import SongItem from './SongItem';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    // props = { song : state.song}
    render() {
        // console.log(this.props);
        return (
            <div>
                {this.props.songs.map((song) => {
                    return (
                        <div className="item" key={song.title}>
                            <div className="right floated content">
                                <button className="ui button primary"
                                    onClick={() => this.props.selectSong(song)}>
                                    SELECT
                                    </button>
                            </div>
                            <div className="content">
                                {song.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

}

// mapStateToProps is used to get data from the whole store
const mapStateToProps = (state) => {
    return { songs: state.songs }
}

// connect function does not only get data from the store
// but is also used to get action creators correctly for SongList 

// We can pass action creator function to connect function, so we can use it inside of our component
// connect calls dispatch automatically for us
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);