document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector('h1');
  heading.addEventListener('click', () => {
    alert('Hello! Welcome to my portfolio.');
  });
});

function loadSection(section) {
  fetch(`${section}/index.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    });
}

