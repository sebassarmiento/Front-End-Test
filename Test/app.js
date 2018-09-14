window.onload = setTimeout(() => { showSlider() }, 5000)
window.onload = setTimeout(() => { patienceText() }, 1500)

// MONK LOADER

function showSlider() {
    document.getElementById('logo').classList.remove('hide')
    document.getElementById('main').className = 'bg2'
    document.getElementById('monk-img').className = 'hide';
    document.getElementById('patience2').className = 'hide';
    document.getElementById('slide1').classList.remove('hide')
    document.getElementById('arrows').classList.remove('hide')
    document.getElementById('pagination').classList.remove('hide')
    document.getElementById('glow').className = 'hide';
}

function patienceText() {
    document.getElementById('patience').classList.remove('hide')
    setTimeout(() => {
        document.getElementById('patience').className = 'hide'
        document.getElementById('patience2').classList.remove('hide')
    }, 2000)
}

// SLIDER

let currentSlide = 0
let text = document.getElementById('text')
let texts = document.getElementById('texts')
let rightArrow = document.getElementById('right-arrow')
let leftArrow = document.getElementById('left-arrow')

let slide0 = '<h1 id="text-0" >WE ARE BREAKING <br />OUR VOW <br />OF SILENCE</h1>'
let slide1 = '<h1 id="text-1">TALENT IS GIVEN</br>TRUE SKILL IS<br/>EARNED</h1>'
let slide2 = '<h1 id="text-2">BE FLEXIBLE</br>TO CHANGE<br/>AND STURDY</br>IN CONDITION</h1>'
let slide3 = '<h1 id="text-3">USE MANY SKILLS</br>YET WORK AS ONE</h1>'
let slide4 = '<h1 id="text-4">TO MASTER</br>ANYTHING FIND<br/>INTEREST IN</br>EVERYTHING</h1>'
let slide5 = '<h1 id="text-5">INDIVIDUALS</br>FLOURISH<br/>IF CULTURE<br/>AND WISDOM<br/>ARE SHARED</h1>'
let slide6 = '<h1 id="text-6">TRAIN FOR</br>PERFECTION BUT<br/>AIM FOR MORE</h1>'
let slide7 = '<h1 id="text-7">TAKE PRIDE IN YOUR</br>WORK BUT DO NOT<br/>SEEK PRAISE</h1>'
let slide8 = '<h1 id="text-7">TEMPORARY</br>SACRIFICE BRINGS<br/>LASTING RESULTS</h1>'

function changeBackgroundPosition(val) {
    document.getElementById('main').style.backgroundPositionX = val
    currentSlide !== 0 ? text.className = 'hide' : text.classList.remove('hide')
}

function moveRight() {
    currentSlide < 8 ? currentSlide++ : null
    let slideAmount = checkCurrentSlide(currentSlide)
    changeBackgroundPosition(slideAmount)
    texts.innerHTML = changeText(currentSlide)
    changePag(currentSlide.toString())
}

function moveLeft() {
    currentSlide > 0 ? currentSlide-- : null
    let slideAmount = checkCurrentSlide(currentSlide)
    changeBackgroundPosition(slideAmount)
    texts.innerHTML = changeText(currentSlide)
    changePag(currentSlide.toString())
}

rightArrow.onclick = moveRight
leftArrow.onclick = moveLeft

// PAGINATION

let currentIcon = document.getElementById('0')
let icons = document.getElementsByClassName('far')

let iconArr = Array.from(icons)

iconArr.unshift(currentIcon)

iconArr.map(el => {
    el.addEventListener('click', () => selectPage(el.id) )
})

function selectPage(num){
    changePag(num)
    currentSlide = parseFloat(num)
    let slideAmount = checkCurrentSlide(currentSlide)
    changeBackgroundPosition(slideAmount)
    texts.innerHTML = changeText(currentSlide)
}

function changePag(str){
    for(let i = 0; i < 9; i++){
        i.toString() !== str ? document.getElementById(i.toString()).className = 'far fa-circle' : document.getElementById(str).className = 'fas fa-circle'
    }
}


// DECLARING REUSABLE FUNCTIONS

function checkCurrentSlide(val){
    let result = ''
    switch(val){
        case 0:
        result = '0px'
        break;
        case 1:
        result = '-800px'
        break;
        case 2:
        result = '-1380px'
        break;
        case 3:
        result = '-2180px'
        break;
        case 4:
        result = '-3000px'
        break;
        case 5:
        result = '-3800px'
        break;
        case 6:
        result = '-4400px'
        break;
        case 7:
        result = '-4900px'
        break;
        case 8:
        result = '-5700px'
        break;
    }
    return result
}

function changeText(val){
    switch(val){
        case 0:
        return slide0;
        case 1:
        return slide1
        case 2:
        return slide2
        case 3:
        return slide3;
        case 4:
        return slide4;
        case 5:
        return slide5;
        case 6:
        return slide6;
        case 7:
        return slide7;
        case 8:
        return slide8;
    }
}




