import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';


const UserCreate = (props) => {
    return (
        <div className="ui form four wide column" >   
            <div className="field">
                <Field/>
                <Button />
            </div>
        </div>
    )
}

export default UserCreate;