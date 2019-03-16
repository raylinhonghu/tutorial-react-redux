import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUser } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount() {
        console.log(this.props.fetchPostAndUser());
    }

    renderList = () => {
        return this.props.posts.map((post) => {
            return (
                <div className="ui segment" key={post.id}>
                    <h3 className="ui header">{post.title}</h3>
                    <div className="content">{post.body}</div>
                    <UserHeader userId={post.userId} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);