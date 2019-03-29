import React from 'react';

class LanguageSelector extends React.Component{
    render(){
        return(
            <div>
            Select a Language:
            <i className="ui flag us" onClick={() => this.props.changeLanguage('english')} />
            <i className="ui flag cn" onClick={() => this.props.changeLanguage('chinese')} />
           </div>
        )
    }
}
export default LanguageSelector;