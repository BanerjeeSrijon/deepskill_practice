// src/BlogDetails.js
import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h1>Blog Details</h1>
      {blogs.map((blog) =>
        blog ? (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>
              <b>{blog.author}</b>
            </h4>
            <p>{blog.content}</p>
          </div>
        ) : null,
      )}
    </div>
  );
}

export default BlogDetails;
