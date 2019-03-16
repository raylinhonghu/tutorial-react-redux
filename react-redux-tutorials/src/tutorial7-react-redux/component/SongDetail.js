import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {

    render() {
        return (
            <div>
                <div className="content">
                    <div className="header">
                        {this.props.selectedSong.title}
                    </div>

                    <div className="description">
                        {this.props.selectedSong.duration}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);