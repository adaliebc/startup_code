import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const BlogPage = () => {
  const history = useHistory();
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
      // Redirect to login page
      history.push('/login');
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
    };
  };

  const handleLoginClick = () => {
    // Redirect to login page
    history.push('/login');
  };

  return (
    <div>
      <div className="banner">
        {/* Unchanged code */}
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
              <button onClick={handleLoginClick}>Login</button>
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
