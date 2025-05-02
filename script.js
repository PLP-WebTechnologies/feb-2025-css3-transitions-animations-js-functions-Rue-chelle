const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Load stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  body.classList.add(storedTheme);
}

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', 'light-mode');
  }
});
