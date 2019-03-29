import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageStore';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderButton(color) {
        return (
            <LanguageContext.Consumer>
                {value => {
                    const text = value.language === 'english' ? 'Submit' : '提交';
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