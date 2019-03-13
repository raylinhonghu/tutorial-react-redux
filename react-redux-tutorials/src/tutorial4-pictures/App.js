import React from "react";
import axios from 'axios';
import Unsplash from './api/unsplash';

import './App.css';
import SearchBar from './searchBar';
import ImageList from './imageList';
import unsplash from "unsplash-js";

// const unsplash = new Unsplash({
//     applicationId: "{}",
//     secret:"ae8f21ce8267dd40c265ccdd649fc6f90ceedddc9946736549bd58b2a5b91f95"
// })

class App extends React.Component {

    state = { text: '', images: [] };

    // AXIOS .THEN()
    // getTextFromSearchBar(value) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {
    //             query: value
    //         },
    //         headers: {
    //             Authorization: 'Client-ID 44ae3afb87dabc26a2eb1b30cca707558fd632b5a3cc28e1d4706e85f9d3799d'
    //         }
    //     }).then((response) => {
    //         console.log(response)
    //         this.setState({
    //             imgUrls: response.data.results.map((result)=>{
    //                 return result.urls.regular;
    //             })
    //         })
    //     })
    // }

    // AXIOS ASYNC AWAIT
    async getTextFromSearchBar(value) {
        const response = await Unsplash.get('/search/photos', {
            params: { query: value }
        })

        console.log(response.data.results);

        this.setState({
            images: response.data.results
        })
    }


    render() {
        console.log(this.state.text)
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar getTextFromSearchBar={this.getTextFromSearchBar.bind(this)} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;


