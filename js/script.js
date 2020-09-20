var menuToggle = document.querySelector('.menu-toggle');
var navMobile = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
    navMobile.classList.toggle('active');
});

// HEADER SCROLL
var header = document.querySelector('header');
// top position of header
var topHeader = header.offsetTop;

window.onscroll = function myFunction() {
    if(window.pageYOffset > topHeader) {
        header.classList.add('header-fixed');
    }else {
        header.classList.remove('header-fixed');
    }
}

// VIDEO LIST
var arrVideo = [
    'https://www.youtube.com/embed/H5jeAqDjmkY',
    'https://www.youtube.com/embed/WRWfsSMEJSs',
    'https://www.youtube.com/embed/XTg9tS3_D20',
    'https://www.youtube.com/embed/umDDXUtywuE',
    'https://www.youtube.com/embed/_8QuUyZZGgk'
];

var listVideo = document.querySelectorAll('.play');

listVideo.forEach((element, index) => {
    listVideo[index].addEventListener("click", function() {
        playVideo(index);
    });
});

function playVideo(i) {
    let video = document.getElementById('choice');
    let videoLength = arrVideo.length;
    
    if(i < videoLength) {
        video.src = arrVideo[i];
    }
    else {
        video.src = "https://www.youtube.com/embed/";
    }
    
}

//ANIMATION
window.sr = ScrollReveal({ reset: true });
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});



