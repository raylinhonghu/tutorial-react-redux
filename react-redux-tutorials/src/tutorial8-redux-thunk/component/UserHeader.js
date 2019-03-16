import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {

    renderUsername = () => {
        const { user } = this.props;
        if (!user) { return null }
        return user.username;
    }


    render() {
        return (
            <h2>
                {this.renderUsername()}
            </h2>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find((user) => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);