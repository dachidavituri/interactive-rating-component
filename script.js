let points = document.querySelectorAll('.btn-point')
let submitBtn = document.querySelector('.submit-btn')
let mainPage = document.querySelector('.main-container')
let thankCont = document.querySelector('.thank-cont')
let result = document.querySelector('.result-point')
let clickedValue = 0;

points.forEach(point =>{
    point.addEventListener('click', ()=>{
        clickedValue = point.innerHTML
        console.log(clickedValue)
    })
})
submitBtn.addEventListener('click', ()=>{
    thankCont.classList.remove('display-change');
    mainPage.classList.add('display-change')
    result.innerHTML = clickedValue
})