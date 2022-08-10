

// Learnt about the querySelector and how to add and remove parameter within the components
// left=document.querysSelector('.left')
//left.addEventListner('mouseLeave', ()=>container.classList.add('hover-left'))
const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

left.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'))

right.addEventListener('mouseenter',()=>container.classList
.add('hover-right'))
right.addEventListener('mouseleave',()=>container.classList
.remove('hover-right'))