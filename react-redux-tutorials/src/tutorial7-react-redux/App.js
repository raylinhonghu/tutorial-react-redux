import React from 'react';
import SongList from './component/SongList';
import SongDetail from './component/SongDetail';

const App = () => {
    return (
        <div className="ui grid container">
            <div className="four wide column">
                <div className="ui divided list">
                    <SongList />
                </div>
            </div>
            <div className="eight wide column">
                <SongDetail />
            </div>
        </div>
    )
}

export default App;