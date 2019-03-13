import React from "react";

class SearchBar extends React.Component {
    state = { text: '' }

    // onChange = (e) => {
    //     e.persist();
    //     console.log(e.target.value)
    //     this.setState({
    //         text: e.target.value
    //     })
    // }


    // Answer the question: whats the value of input now????
    // controlled component: 
    // save the state in the react app component, not DOM

    // uncontrolled component:
    // ask for the DOM

    onFormSubmit = (e) => { 
        e.preventDefault();
        this.props.getTextFromSearchBar(this.state.text);
        // console.log(this.state.text)
    }


    render() {
        return (
            <div className="ui segment">
                {/* react rips onFormSubmit function off from the object and calls on its own, so we this.state can not be found */}
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" placeholder="Enter Text" onChange={(e) => this.onChange(e)} /> */}
                        {/* <input type="text" placeholder="Enter Text" onChange={this.onChange} /> */}
                        <input
                            type="text"
                            placeholder="Enter Some Text"
                            value={this.state.text}
                            onChange={(e) => this.setState({ text: e.target.value })}
                        />
                    </div>

                </form>
            </div>

        )
    }
}

export default SearchBar;

