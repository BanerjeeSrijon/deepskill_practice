import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null,
        };
    }

    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                return response.json();
            })
            .then((posts) => this.setState({ posts }))
            .catch((error) => this.setState({ error: error.message }));
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, errorInfo) {
        alert(`Error occurred: ${error.message}`);
        console.error("Error Info:", errorInfo);
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="posts">
                <h1>Blog Posts</h1>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default Posts;
