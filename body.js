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
// let slider = document.getElementsByClassName('carousel-item');
// let area_type = document.getElementsByClassName('area-type');
// let InitialslidLen = 0;
// let totalSlidLen = slider.length;
// console.log(totalSlidLen);
let len = cards.length;
const myCarouselElement = document.querySelector('#carousel-item')
// setInterval(() => {
//     console.log(InitialslidLen);
//     slider[InitialslidLen].classList.add("active");
//     // area_type[InitialslidLen].aria_current="true";
//     InitialslidLen++;
//     if(InitialslidLen >= totalSlidLen)
//     {
//         for (let i = 1; i < totalSlidLen ; i++)
//         {
//             slider[i].classList.remove("active");
//         }
//         InitialslidLen = 0;
//         slider[InitialslidLen].classList.add("active");
//     }
// }, 2000);
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