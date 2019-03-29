import React, { Component } from 'react';
import UserCreate from './components/UserCreate';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './components/LanguageSelector';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        }
    }

    changeLanguage = (language) => {
        this.setState({
            language: language
        })
    }

    render() {
        return (
            <div>
                <LanguageSelector changeLanguage={this.changeLanguage}/>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                {/* <LanguageContext.Provider value="chinese">
                    <UserCreate />
                </LanguageContext.Provider>
                <UserCreate /> */}
            </div>
        )
    }
}

export default App;