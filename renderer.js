const { ipcRenderer } = require('electron');
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

// DOM elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const messages = document.querySelector('#messages');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
});
