import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';


// export default fetchPost = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonplaceholder.get('/post');
//         dispatch({ type: 'FETCH_POSTS', payload: response });
//     }
// }

// SIMPLIFIED 
export const fetchPost = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    // _.uniq(_.map(getState().posts,'userId')).forEach((id)=>{
    //     dispatch(fetchUser(id));
    // })

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

// MEMORIZED VERSION 
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })


// Error: Actions must be plain objects. Use custom middleware for async actions.
// export const fetchPost = async () => {
//     const response = await jsonplaceholder.get('/posts');

//     return {
//         type: 'FETCH_POST',
//         payload: response
//     }
// } 
// ANSWER: transpiler to ES5, we first request a REQUEST OBJECT NOT OUR OBJECT, its not PLAIN!



// BAD: NO DATA 
// export const fetchPost = () => {
//     const promise = jsonplaceholder.get('/posts');

//     return {
//         type: 'FETCH_POST',
//         payload: promise
//     }
// } 

// ANSWER : by the time our action gets to a reducer, we WON'T have fetched our data!

// SYNCHRONOUS ACTION: when we call it, 
// it immediately returns an object with all the data attached to an object, 
// and its ready to be processed by the reducer

// ASYNCHRONOUS ACTION: when we call it, it waits for a response from a request,
// it requires a little bit time before it dispatch an aciton. ( we need middleware to create async action creator)

// ADDING MIDDLEWARE...
// AC => (produces an)ACTION => (gets fed to)DISPATCH => (send actions to)MIDDLEWARE => (send actions to) REDUCERS => (create new)STATE

// REDUX-THUNK
// 1. can return an action object 
// 2. can return functions and r-t will call this function automatically 