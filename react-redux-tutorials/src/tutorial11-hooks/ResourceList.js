import React from 'react';
import useResource from './useResource';

const ResourceList = ({ resource }) => {

    // componentDidMount() {
    //     this.fetchResource();
    // }

    // fetchResource = async () => {
    //     const response = await jsonapi.get(`/${this.props.resource}`);
    //     console.log(response.data);
    //     const titles = response.data.map((res) => {
    //         return res.title
    //     })
    //     this.setState({ resource: titles })
    // }

    // componentDidUpdate(preProps){
    //     if(this.props.resource!=preProps.resource){
    //         this.fetchResource();
    //     }
    // }

    const resources = useResource(resource);

    return (
        <div>
            <ul>
                {resources.map((res)=>{
                    return <li key={res.id}>{res.title}</li>
                })}
            </ul>
        </div>
    )
}

export default ResourceList;