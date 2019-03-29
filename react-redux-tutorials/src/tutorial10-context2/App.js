import React, { Component } from 'react';
import UserCreate from './components/UserCreate';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './components/LanguageSelector';
import { LanguageStore } from './contexts/LanguageStore';

class App extends React.Component {

    render() {
        return (
            <div>
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;