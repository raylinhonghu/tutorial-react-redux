import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:45' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ]
}

const returnSelectedSong = (selectedSong = {}, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: returnSelectedSong
})