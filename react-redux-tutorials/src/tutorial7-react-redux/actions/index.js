// Action Creator Name Export 
export const selectSong = (song) => {
    // Return an action 
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
