let dark = document.getElementById('dark');
let light = document.getElementById('light');
let cards = document.getElementsByClassName('card-body');
let header = document.getElementById("header");
let search = document.getElementById("search");
let container =  document.getElementById("cnt1");
let input =  document.getElementById("input");
let icn =  document.getElementById("icn"); 
let items1 =  document.getElementsByClassName("items1");
let line = document.getElementsByClassName('line');
let len = cards.length;
const myCarouselElement = document.querySelector('#carousel-item')

const lightMode = () =>
{
    light.style.display = 'none';
    dark.style.display = 'flex';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#14142e';
    header.style.backgroundColor = 'white';
    container.style.backgroundColor = 'white';
    search.style.backgroundColor = 'white';
    input.style.backgroundColor = 'white';
    input.style.color = '#14142e';
    input.style.boxShadow = '3px 3px 2px gray';
    icn.style.color = '#14142e';
    for(let i = 0 ; i < len; i++)
    {
        cards[i].style.backgroundColor = 'white';
        cards[i].style.color = '#14142e';
    }
    for(let i = 0 ; i < line.length ; i++)
    {
        line[i].style.backgroundColor = '#14142e';
    }
    
}
const darkMode = () =>
{
    dark.style.display = 'none';
    light.style.display = 'flex';
    light.style.color = 'white';
    document.body.style.backgroundColor = '#14142e';
    document.body.style.color = 'white';
    header.style.backgroundColor = '#14142e';
    search.style.backgroundColor = '#14142e';
    icn.style.color = 'white';
    input.style.backgroundColor = '#14142e';
    input.style.color = 'white';
    input.style.borderBottom = '2px solid white';
    input.style.boxShadow = '1px 1px 2px gray';
    container.style.backgroundColor = '#14142e';
    header.style.color = 'rgb(147 51 234)';
    container.style.color = 'rgb(147 51 234)';
    for(let i = 0 ;i< len; i++)
    {
        cards[i].style.backgroundColor = '#14142e';
        cards[i].style.color = 'white';   
    }
    for(let i = 0; i< items1.length ; i++)
    {
        items1[i].style.color = 'rgb(147 51 234)';
    }
    for(let i = 0 ; i < line.length ; i++)
    {
        line[i].style.backgroundColor = 'white';
    }

}
// Get references to the links that trigger scrolling
// Get references to the links that trigger scrolling
const sportsLink = document.querySelector('.items-2');
const electronicsLink = document.querySelector('.items-3');
const fashionLink = document.querySelector('.items-4');
const groceryLink = document.querySelector('.items-5');
const aboutLink = document.querySelector('.items-6');
// Define a function to scroll to a section with custom duration and offset
function scrollToSection(elementId, duration, offset) {
    const element = document.querySelector(elementId);
    const yOffset = element.getBoundingClientRect().top + window.scrollY - offset;
    const startingY = window.pageYOffset;
    const diff = yOffset - startingY;
    let start;

    // Use requestAnimationFrame for smoother animation
    function step(timestamp) {
        if (!start) {
            start = timestamp;
        }

        const time = timestamp - start;
        const percentage = Math.min(1, time / duration);

        window.scrollTo(0, startingY + diff * percentage);

        if (time < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}
// Add click event listeners to the links with custom duration and offset (e.g., 800 milliseconds, 50 pixels)
sportsLink.addEventListener('click', () => scrollToSection('#sport', 600, 50));
electronicsLink.addEventListener('click', () => scrollToSection('#electronics', 600, 50));
fashionLink.addEventListener('click', () => scrollToSection('#fashion', 600, 50));
groceryLink.addEventListener('click', () => scrollToSection('#grocery', 600, 50 ));
aboutLink.addEventListener('click', () => scrollToSection('#about', 600,50));

// Type writer effect
const changingText = document.getElementById("changingText");
const texts = ["Love", "Manish", "Manku"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[currentIndex];
    if (isDeleting) {
        changingText.textContent =  currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        changingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeText, 600);
    } else {
        setTimeout(typeText, isDeleting ? 100 : 300);
    }
}

typeText();

