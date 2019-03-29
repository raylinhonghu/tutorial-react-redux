import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageStore';

class Field extends React.Component {
    render() {
        const text = this.context.language === 'english' ? 'Country' : '国家';
        return (
            <div>
                <label className="ui">{text}</label>
                <input type="text" />
            </div>
        )
    }
}

Field.contextType = LanguageContext;

export default Field;