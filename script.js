let scrollContainer = document.querySelector('.gallery');
let back = document.querySelector('#backbtn');
let next = document.querySelector('#nextbtn');

scrollContainer.addEventListener('wheek', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})
next.addEventListener('click', (e) => {
    e.preventDefault();
})