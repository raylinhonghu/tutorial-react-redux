import React from 'react';
import { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    // state = { resource: 'posts' };
    const [resource, setResource] = useState('posts');

    return (
        <div className="ui container">
            <div>
                <button onClick={() => setResource('posts')}>POST</button>
                <button onClick={() => setResource('todos')}>TODO</button>
            </div>
            <div>
                <ResourceList resource={resource}/>
            </div>
        </div>
    )
}

export default App;