const welcome = document.getElementById('welcome')

const typewriter = new window.Typewriter(welcome, {
  loop: false,
  delay: 100
});

document.addEventListener("DOMContentLoaded", (event) => {
    typewriter
    .typeString('Welcome...')
    .start();
    
});