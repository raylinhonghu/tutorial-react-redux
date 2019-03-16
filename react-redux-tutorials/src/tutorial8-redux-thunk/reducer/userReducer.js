export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [action.payload, ...state];
        default:
            return state;
    }
}