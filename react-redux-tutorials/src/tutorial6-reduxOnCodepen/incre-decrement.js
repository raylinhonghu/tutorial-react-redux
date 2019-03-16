const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

const Counter = (props) => {
    return (
        <div>
            <button className="increment" onClick={() => props.increment()}>Increment</button>
            <button className="decrement" onClick={() => props.decrement()}>Decrement</button>
            Current Count: <span>{props.count}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { count: state.count }
}

const WrappedCounter = ReactRedux.connect(mapStateToProps, {
    increment: increment,
    decrement: decrement
})(Counter);


const store = Redux.createStore(Redux.combineReducers({
    count: (count = 0, action) => {
        if (action.type === 'increment') {
            return count + 1;
        } else if (action.type === 'decrement') {
            return count - 1;
        } else {
            return count;
        }
    }
}));

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <WrappedCounter />
    </ReactRedux.Provider>,
    document.querySelector('#root')
);


