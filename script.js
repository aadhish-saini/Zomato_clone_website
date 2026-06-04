// Fade-in animation on page load

window.addEventListener("load", () => {

    const heading = document.querySelector("main h1");
    const text = document.querySelector("main div");
    const search = document.querySelector("main input");

    setTimeout(() => {
        heading.classList.add("fade-in");
    }, 300);

    setTimeout(() => {
        text.classList.add("fade-in");
    }, 700);

    setTimeout(() => {
        search.classList.add("fade-in");
    }, 1100);
});


// Navbar color change on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});


// Search bar animation

const searchInput = document.querySelector("input");

searchInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        const value = searchInput.value.trim();

        if(value !== ""){
            alert(`Searching for: ${value}`);
        }
    }
});


// Placeholder typing effect

const placeholders = [
    "Search for restaurant...",
    "Search for cuisine...",
    "Search for biryani...",
    "Search for pizza...",
    "Search for burgers..."
];

let index = 0;

setInterval(() => {

    searchInput.placeholder = placeholders[index];

    index++;

    if(index >= placeholders.length){
        index = 0;
    }

}, 2500);


// Logo click effect

const logo = document.querySelector(".logo img");

logo.addEventListener("click", () => {

    logo.style.transform = "scale(1.1)";

    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 200);
});