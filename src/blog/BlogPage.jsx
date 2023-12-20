import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const userName = localStorage.getItem('userName');
    setIsLoggedIn(!!userName);
  };

  const addComment = async () => {
    if (!isLoggedIn) {
      // Redirect to login page using <a> tag
      window.location.href = '/login';
      return;
    }

    if (commentInput.trim() === '') {
      return; // Ignore empty comments
    }

    const newComment = {
      id: Date.now(),
      text: commentInput,
    };

    const socket = new WebSocket('ws://localhost:3001');
    socket.onopen = () => {
      socket.send(JSON.stringify(newComment));
      setCommentInput('');
      socket.onmessage = (event) => {
        console.log('received: ', event.data);
 
        setComments(comments => [
          ...comments,
          {"id":JSON.parse(event.data)["id"],"text":JSON.parse(event.data)["text"]}
        ])
 
        console.log('comments: ', comments);
    };
  };
};

  return (
    <div>
      <div className="banner">
        <h1 className="site-title">Fiber Art Faerie</h1>
        <div className="menu" id="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>Simple Blog</h1>
        </div>
        <div className="user-info" id="user-info">
          {isLoggedIn ? (
            <div>
              <p>Hello, <span id="playerName">{localStorage.getItem('userName')}</span>!</p>
            </div>
          ) : (
            <div>
              <a href="/login">Login</a>
            </div>
          )}
        </div>
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
            placeholder={isLoggedIn ? 'Add your comment...' : 'Login to add a comment'}
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            disabled={!isLoggedIn}
          />
          <button onClick={addComment} disabled={!isLoggedIn}>Add Comment</button>
        </div>
      </div>

      <footer>
        <p>Visit our GitHub repository: <a href="https://github.com/adaliebc/startup" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default BlogPage;
