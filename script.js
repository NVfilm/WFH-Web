// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});


// =========================
// TESTIMONIAL SLIDER
// =========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);


// =========================
// FAQ ACCORDION
// =========================

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        content.classList.toggle("active");

    });

});


// =========================
// WHATSAPP LEAD FORM
// =========================

leadForm.addEventListener("submit", async function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;

    // n8n webhook par data bhejo
    try {
        await fetch("https://nvgrowthhub.app.n8n.cloud/webhook/lead-capture", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                city: city,
                service: "Work From Home Opportunity"
            })
        });
    } catch (error) {
        console.error("Webhook Error:", error);
    }

    let message = `🔥 New Work From Home Lead

👤 Name: ${name}

📱 Mobile: ${phone}

📧 Email: ${email}

🏙 City: ${city}

Interested in Work From Home Opportunity`;

    let whatsappURL =
    `https://wa.me/918796493504?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    leadForm.reset();

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".card, .income-box, .gallery img, .faq-item"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// =========================
// HERO BUTTON SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// =========================
// PAGE LOADER EFFECT
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition =
"opacity .8s ease";
