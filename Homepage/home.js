const resume = document.getElementById('resumeRedirect');
const projects = document.getElementById('portfilioRerirect');
const abMe = document.getElementById('aboutMeRedirect');

resume.addEventListener('click', function(){
    window.location.href = '../Resume/resume.html';
});

projects.addEventListener('click', function(){
    window.location.href = '../Projects/projSelect.html';
});

abMe.addEventListener('click', function(){
    window.location.href = '../About Me/abMeSelect.html';
});