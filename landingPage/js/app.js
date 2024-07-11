AOS.init();
new PureCounter();

let caret = document.querySelector('#caret')
caret.addEventListener('click' , ()=>{
    caret.lastElementChild.classList.toggle('fa-angle-down')
    caret.lastElementChild.classList.toggle('fa-angle-up')
})