// Counter Animation

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();
});


// Testimonial Slider

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');

}, 3000);


// Form Submit

document.getElementById('leadForm').addEventListener('submit', function(e){

    e.preventDefault();

    alert('Thank You! Our Team Will Contact You Soon.');

});