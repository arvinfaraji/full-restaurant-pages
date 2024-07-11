let curentNum = document.getElementById('number')
let plusBtn = document.getElementById('plusBtn')
let minuseBtn = document.getElementById('minuseBtn')
let newNum;

minuseBtn.addEventListener('click', function() {
    newNum = Number(curentNum.innerHTML)-1
    curentNum.innerHTML = newNum
    if (newNum < 0){
        curentNum.innerHTML = 0
    }
})

plusBtn.addEventListener('click', function() {
    newNum = Number(curentNum.innerHTML)+1
    curentNum.innerHTML = newNum
})

