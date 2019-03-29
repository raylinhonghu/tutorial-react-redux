import React from 'react';
import LanguageContext from '../contexts/LanguageStore';

class LanguageSelector extends React.Component{
    static contextType = LanguageContext;
    render(){
        console.log(this.context)
        return(
            <div>
            Select a Language:
            <i className="ui flag us" onClick={() => this.context.changeLanguage('english')} />
            <i className="ui flag cn" onClick={() => this.context.changeLanguage('chinese')} />
           </div>
        )
    }
}
export default LanguageSelector;