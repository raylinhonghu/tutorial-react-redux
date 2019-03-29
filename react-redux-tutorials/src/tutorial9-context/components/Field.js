import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

//  Field = (props, context) => { 
//     console.log(context)
//     const text = context === 'english' ?'Country' : '国家';
//     return (
//         <div>
//             <label className="ui">{text}</label>
//             <input type="text" />
//         </div>
//     )
// }
// Warning: Field: Function components do not support contextType.

class Field extends React.Component {
    render() {
        const text = this.context === 'english' ? 'Country' : '国家';
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