/* =========================================================
   DHARMESH SHARMA WEBSITE - JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuButton.textContent =
            nav.classList.contains("active")
                ? "✕"
                : "☰";

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* ================= FAQ ================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        const answer =
            item.querySelector(".faq-answer");

        const isActive =
            item.classList.contains("active");


        /* Close all other FAQ items */

        document.querySelectorAll(".faq-item")
            .forEach(otherItem => {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;

            });


        /* Open clicked item */

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= LEAD FORM ================= */

const leadForm =
    document.getElementById("leadForm");

const formMessage =
    document.getElementById("formMessage");


leadForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const interest =
        document.getElementById("interest").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone  || !interest) {

        formMessage.style.color = "#c0392b";

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }


    /*
        IMPORTANT:

        This demo submits the lead to WhatsApp.

        Replace the number below with Dharmesh Sharma's
        actual WhatsApp number.

        Example:

        const advisorWhatsApp = "919876543210";
    */

    const advisorWhatsApp =
        "919782852437";


    const whatsappMessage =
        `New Website Enquiry

Name: ${name}

Phone: ${phone}

Email: ${email}

Interested In: ${interest}

Message:
${message || "No additional message."}`;


    const whatsappURL =
        `https://wa.me/${advisorWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;


    formMessage.style.color = "#159447";

    formMessage.textContent =
        "Opening WhatsApp to send your enquiry...";


    setTimeout(() => {

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }, 700);


    leadForm.reset();

});


/* ================= HEADER SHADOW ================= */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});