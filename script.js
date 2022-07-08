let fitnes1 = document.querySelector('.fitnes1')
let premium1 = document.querySelector('.premium1')
let prostornoe1 = document.querySelector('.prostornoe1')
let balans1 = document.querySelector('.balans1')
let fitnes = document.querySelector('.fitnes')
let premium = document.querySelector('.premium')
let prostornoe = document.querySelector('.prostornoe')
let balans = document.querySelector('.balans')



fitnes1.onclick = () => {
    fitnes.style.display = "block"
    premium.style.display = "none"
    prostornoe.style.display = "none"
    balans.style.display = "none"
    fitnes1.className = "tabheader__item_active"
    premium1.className = "tabheader__item"
    prostornoe1.className = "tabheader__item"
    balans1.className = "tabheader__item"
}
premium1.onclick = () => {
    fitnes.style.display = "none"
    premium.style.display = "block"
    prostornoe.style.display = "none"
    balans.style.display = "none"
    fitnes1.className = "tabheader__item"
    premium1.className = "tabheader__item_active"
    prostornoe1.className = "tabheader__item"
    balans1.className = "tabheader__item"
}
prostornoe1.onclick = () => {
    fitnes.style.display = "none"
    premium.style.display = "none"
    prostornoe.style.display = "block"
    balans.style.display = "none"
    fitnes1.className = "tabheader__item"
    premium1.className = "tabheader__item"
    prostornoe1.className = "tabheader__item_active"
    balans1.className = "tabheader__item"
}
balans1.onclick = () => {
    fitnes.style.display = "none"
    premium.style.display = "none"
    prostornoe.style.display = "none"
    balans.style.display = "block"
    fitnes1.className = "tabheader__item"
    premium1.className = "tabheader__item"
    prostornoe1.className = "tabheader__item"
    balans1.className = "tabheader__item_active"
}

let btns = document.querySelectorAll('.btn')
let body = document.querySelector('body')
let modal = document.querySelector('.modal')
let modalc = document.querySelector('.modal__close')

btns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "inline"
    }
})

modalc.onclick = () => {
    modal.style.display = "none"
}


let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let pepperr = document.querySelector('.pepperr')
let foodd = document.querySelector('.foodd')
let oill = document.querySelector('.oill')
let paprikaa = document.querySelector('.paprikaa')
let how = document.querySelector('.how')
let luv = document.querySelector('.luv')

next.onclick = () => {
    pepperr.style.display = "none"
    foodd.style.display = "block"
    how.innerHTML = "02"
    luv.innerHTML = "03"
}
prev.onclick = () => {
    pepperr.style.display = "block"
    foodd.style.display = "none"
    how.innerHTML = "01"
    luv.innerHTML = "02"
}


let form = document.forms.register
let inp1 = document.querySelector('.o')
let inp = document.querySelector('.b')

let pattern = {
    name: /^[a-z ,а-я ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
};
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
        field.previousSibling.previousSibling.style.border = "2px solid #4200FF"
        inp1.style.border = "2px solid red"
        inp.style.border = "2px solid red"
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
        field.previousSibling.previousSibling.style.border = "2px solid red"
        inp1.style.border = "2px solid red"
        inp.style.border = "2px solid red"
    }
}
inp1.onkeyup = () => {
    let key = inp1.name
    validate(inp, pattern[key])
}
inp.onkeyup = () => {
    let key = inp.name

    validate(inp, pattern[key])
}

// form.onsubmit = (event) => {
//     event.preventDefault()
//     let count = 0
//     if (inp.value.length === 0 || inp.classList.contains('invalid')) {
//         inp.classList.add('invalid')
//     }
//     if (count > 0) {
//         console.log('Запишите свои данные!');
//     } else {
//         submit()
//     }
// }

function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
}



let day = document.querySelector('.days')
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')

let timer = setInterval(() => {
    second.innerHTML -- 
    if(second.innerHTML == 0){
        second.innerHTML = 59

        minute.innerHTML --
        if(minute.innerHTML == 0){
            minute.innerHTML = 59

            hour.innerHTML --
            if(hour.innerHTML == 0){
                hour.innerHTML = 59

                day.innerHTML --
                if(day.innerHTML == -1){
                    clearInterval(timer)
                    day.innerHTML = 0
                    hour.innerHTML = 0
                    minute.innerHTML = 0
                    second.innerHTML = 0
                }
            }
        }
    }
}, 1000);
console.log(day);