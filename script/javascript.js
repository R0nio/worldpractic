const btn=document.getElementById("oplat")
const menus = document.querySelectorAll(".Cards")
const menus1 = document.querySelectorAll(".countcard")
const menus2 = document.querySelectorAll(".activ")
const menus3 = document.querySelectorAll(".b")
const menus4 = document.querySelectorAll(".noactiv")
const menus5 = document.querySelectorAll(".b2")
btn.addEventListener('click', () =>{
    for(let el of menus){
        el.classList.toggle("noshow")
    }
    for(let el of menus1){
        el.classList.toggle("noshow")
    }
    for(let el of menus2){
        el.classList.toggle("l")
    }
    for(let el of menus3){
        el.classList.toggle("l1")
    }

    for(let el of menus4){
        el.classList.toggle("l2")
    }

    for(let el of menus5){
        el.classList.toggle("l21")
    }
})

const btn1=document.getElementById("neoplat")
const menus12 = document.querySelectorAll(".Cards")
const menus22 = document.querySelectorAll(".countcard")
const menus23 = document.querySelectorAll(".activ")
const menus32 = document.querySelectorAll(".b")
const menus42 = document.querySelectorAll(".noactiv")
const menus52 = document.querySelectorAll(".b2")
btn1.addEventListener('click', () =>{
    for(let el of menus12){
        el.classList.toggle("noshow")
    }
    for(let el of menus22){
        el.classList.toggle("noshow")
    }
    for(let el of menus23){
        el.classList.toggle("l")
    }
    for(let el of menus32){
        el.classList.toggle("l1")
    }

    for(let el of menus42){
        el.classList.toggle("l2")
    }

    for(let el of menus52){
        el.classList.toggle("l21")
    }
})