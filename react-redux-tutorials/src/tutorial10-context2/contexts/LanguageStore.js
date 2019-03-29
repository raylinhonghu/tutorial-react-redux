// stores data and actions

import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    changeLanguage = (language) => {
        this.setState({ language });
    }


    render() {
        return (
            <Context.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;