// script.js

// Your existing code...

// WebSocket connection code
const socket = io('http://localhost:3001'); // Replace with your WebSocket server URL

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
  // Additional actions upon connection if needed
});

socket.on('message', (message) => {
  console.log('Received message:', message);
  // Handle the received message, e.g., update the comments section
  const commentList = document.getElementById('comment-list');
  const newComment = document.createElement('li');
  newComment.textContent = message;
  commentList.appendChild(newComment);
});

// Function to send a comment
function addComment() {
  const commentInput = document.getElementById('comment-input');
  const comment = commentInput.value;

  // Send the comment to the WebSocket server
  socket.send(comment);

  // Clear the input field
  commentInput.value = '';
}
