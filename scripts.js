

// Comment system (simple, client-side only)
document.getElementById('comment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const commentInput = document.getElementById('comment');
  const commentsList = document.getElementById('comments-list');

  const username = usernameInput.value.trim();
  const comment = commentInput.value.trim();

  if (!username || !comment) return;

  // Create new comment div
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  const userSpan = document.createElement('span');
  userSpan.classList.add('username');
  userSpan.textContent = username;

  const commentP = document.createElement('p');
  commentP.classList.add('comment-text');
  commentP.textContent = comment;

  commentDiv.appendChild(userSpan);
  commentDiv.appendChild(commentP);

  // Add new comment to the top of the list
  commentsList.prepend(commentDiv);

  // Reset form
  usernameInput.value = '';
  commentInput.value = '';

  // Optional: Save to localStorage to persist comments per page
  saveComments();
});

// Persist comments with localStorage keyed by page URL
function saveComments() {
  const commentsList = document.getElementById('comments-list');
  localStorage.setItem('comments-' + location.pathname, commentsList.innerHTML);
}

function loadComments() {
  const savedComments = localStorage.getItem('comments-' + location.pathname);
  if (savedComments) {
    document.getElementById('comments-list').innerHTML = savedComments;
  }
}

document.addEventListener('DOMContentLoaded', loadComments);

// Create and add username span
const userSpan = document.createElement('span');
userSpan.classList.add('username');
userSpan.textContent = username;

// Create and add timestamp span
const timeSpan = document.createElement('span');
timeSpan.classList.add('timestamp');
const now = new Date();
timeSpan.textContent = now.toLocaleString();  // Local date & time string

// Create and add comment text paragraph
const commentP = document.createElement('p');
commentP.classList.add('comment-text');
commentP.textContent = comment;

// Append username, timestamp, and comment text to comment div
commentDiv.appendChild(userSpan);
commentDiv.appendChild(timeSpan);
commentDiv.appendChild(commentP);


const tutorials = [
  { title: "How to Install LSPDFR", url: "tutorial-install.html" },
  { title: "Advanced Plugin Setup", url: "tutorial-advanced.html" },
  { title: "Using Callouts Effectively", url: "tutorial-callouts.html" },
  // Add more items here
];

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('search-results');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  const filtered = tutorials.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  const list = filtered.map(item =>
    `<li><a href="${item.url}">${item.title}</a></li>`
  ).join('');

  resultsDiv.innerHTML = `<ul>${list}</ul>`;
});






