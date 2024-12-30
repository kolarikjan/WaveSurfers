$(document).ready(function () {

    document.querySelector('.navbar-toggle').addEventListener('click', function () {

        document.querySelector('.navbar-toggle').classList.toggle('open');

    });

});
window.onscroll = function(ev) {
    if (window.scrollY > 15) {
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.querySelector('.header').classList.remove('scrolled');
    }
};