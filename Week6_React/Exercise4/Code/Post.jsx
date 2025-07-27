import React from "react";

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        );
    }
}

export default Post;
