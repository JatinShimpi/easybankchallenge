const hamburger = document.querySelector('#btnHamburger') 
const body =document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElms = document.querySelectorAll('.has-fade')

hamburger.addEventListener('click',function(){
    if (header.classList.contains('open')) { //closing the hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElms.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        
    }
    else{//opening the hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElms.forEach(function(element){
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })
        
    }
})