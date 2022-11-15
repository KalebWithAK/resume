window.onload = () => {
  const toggle = document.querySelector('input')
  toggle.addEventListener('click', (e) => toggleTheme(e.target.checked))
}

function toggleTheme(dark_theme) {
  if (dark_theme) {
    document.body.className = 'dark'
  }

  else {
    document.body.className = ''
  }
}


// TODO - dark theme
