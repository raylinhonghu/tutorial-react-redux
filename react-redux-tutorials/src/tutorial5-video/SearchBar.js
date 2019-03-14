import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { videoName: '' }

    onInputChange = (e) => {
        this.setState({
            videoName: e.target.value
        })
    }

    onInputSubmit = (e) => {
        e.preventDefault();
        this.props.onInputSubmit(this.state.videoName)
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={(e) => this.onInputSubmit(e)}>
                    <label>Search for Videos</label>
                    <input
                        value={this.state.videoName}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;