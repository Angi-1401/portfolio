/* Handle Dark Mode with Flowbite */

/* Selecting HTML elements with the IDs 'hljs-light' and 'hljs-dark'. 
These elements are references to the stylesheets used for syntax highlighting in a code block. */
var hljsLightTheme = document.getElementById('hljs-light');
var hljsDarkTheme = document.getElementById('hljs-dark');

/* Handling the initial setting of the color theme based on the user's preference or the 
system's default color scheme. */
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  hljsLightTheme.disabled = true;
  hljsDarkTheme.disabled = false;
} else {
  document.documentElement.classList.remove('dark')
  hljsLightTheme.disabled = false;
  hljsDarkTheme.disabled = true;
}

/* Determining which theme toggle icon should be displayed based on the color theme set by 
the user or the system's default color scheme. */
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') == 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

/* Functionality of toggling between light and dark themes when a user clicks on a
theme toggle button. */
var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') == 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      hljsLightTheme.disabled = true;
      hljsDarkTheme.disabled = false;
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      hljsLightTheme.disabled = false;
      hljsDarkTheme.disabled = true;
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      hljsLightTheme.disabled = true;
      hljsDarkTheme.disabled = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      hljsLightTheme.disabled = false;
      hljsDarkTheme.disabled = true;
    }
  }
});