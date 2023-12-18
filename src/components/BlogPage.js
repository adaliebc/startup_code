// BlogPage.js

import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket('ws://localhost:3001');

    // Handle incoming messages
    socket.onmessage = (event) => {
      const newComment = JSON.parse(event.data);
      setComments((prevComments) => [...prevComments, newComment]);
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const addComment = () => {
    if (commentInput.trim() === '') {
      return; // Ignore empty comments
    }

    const newComment = {
      id: Date.now(),
      text: commentInput,
    };

    // Send the new comment to the WebSocket server
    const socket = new WebSocket('ws://localhost:3001');
    socket.onopen = () => {
      socket.send(JSON.stringify(newComment));
      setCommentInput('');
    };
  };

  return (
    <div>
      <div className="banner">
        <h1 className="site-title">Fiber Art Faerie</h1>
        <div className="menu" id="menu">
          <ul>
          // Navigation in Home.js or any other component

<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/shop">Shop</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/faq">FAQs</a></li>
</ul>

          </ul>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>Simple Blog</h1>
        </div>
        <div className="user-info" id="user-info"></div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Sample Blog Post</h2>
        <p className="post-content">
          This is a blog post. This doesn't necessarily work, but it's a start.
        </p>
      </div>

      <div className="comments">
        <h3>Comments</h3>
        <ul id="comment-list">
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
        <div className="comment-form">
          <input
            type="text"
            id="comment-input"
            placeholder="Add your comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
      </div>

      <footer>
        <p>Visit our GitHub repository: <a href="https://github.com/adaliebc/startup" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default BlogPage;
