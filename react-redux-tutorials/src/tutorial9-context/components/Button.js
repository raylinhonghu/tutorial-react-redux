import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderButton(color) {
        return (
            <LanguageContext.Consumer>
                {value => {
                    const text = value === 'english' ? 'Submit' : '提交';
                    return <button className={`ui button ${color}`}>{text}</button>
                }}
            </LanguageContext.Consumer>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;