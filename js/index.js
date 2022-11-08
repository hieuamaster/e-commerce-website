// SPECIAL COUNTDOWN
let dayEl = document.querySelector('#days');
let hourEl = document.getElementById('hours');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');

let countDown = () => {
    let futureDate = new Date('30 March 2023');
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;
};
countDown();
setInterval(countDown, 1000);

// SCROLL BACK TO TOP
function scrollBackToTop() {
    let scrollEl = document.querySelector('#scrollUp');
    window.onscroll = () => {
        var scrollTopValue = document.documentElement.scrollTop;
        console.log(scrollTopValue);
        if (scrollTopValue > 100) {
            scrollEl.classList.add('scrollActive');
        } else {
            scrollEl.classList.remove('scrollActive');
        }
    };
}
scrollBackToTop();

// NAV HIDE
