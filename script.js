let fitnes1 = document.querySelector('.fitnes1')
let premium1 = document.querySelector('.premium1')
let prostornoe1 = document.querySelector('.prostornoe1')
let balans1 = document.querySelector('.balans1')
let fitnes = document.querySelector('.fitnes')
let premium = document.querySelector('.premium')
let prostornoe = document.querySelector('.prostornoe')
let balans = document.querySelector('.balans')

let texts = {
     fitnes: 'Меню "Фитнес" - это новый подход к приготовлению блюд: большесвежих овощей и фруктов. Для людей, которые интересуются спортом;активных и здоровых. Это абсолютно новый продукт с оптимальнойценой и высоким качеством!',
     premium: 'Меню “Премиум” - мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты,фрукты - ресторанное меню без похода в ресторан!',
     menu: 'Наше специальное “Постное меню” - это тщательный подборингредиентов: полное отсутствие продуктов животного происхождения.Полная гармония с собой и природой в каждом элементе! Все будетОм!',
     balance: 'Меню "Сбалансированное" - это соответствие вашего рациона всемнаучным рекомендациям. Мы тщательно просчитываем вашу потребностьв к/б/ж/у и создаем лучшие блюда для вас.'
};
let images = {
     fitnes: "img/tabs/vegy.jpg",
     premium: "img/tabs/elite.jpg",
     menu: "img/tabs/post.jpg",
     balance: "img/tabs/hamburger.jpg",
};
let img = document.querySelector(".imgg");
let tabcontent = document.querySelector(".tabcontent__descr");
let btns1 = document.querySelectorAll(".tabheader__item");
for (let btn of btns1) {
     btn.onclick = () => {
          let key = btn.getAttribute('data-name')
          img.setAttribute('src', images[key])
          tabcontent.innerHTML = texts[key]
          btns.forEach(item => item.classList.remove('tabheader__item_active'))
          btn.classList.add('tabheader__item_active')
     };
}

let btns = document.querySelectorAll('.btn')
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


let num = 0

if(num > 0 || num < 4){
     next.onclick = () => {
          num++
          if(num === 0 ){
               pepperr.style.display = "inline"
          } else if(num === 1){
               pepperr.style.display = "none"
               foodd.style.display = "inline"
               how.innerHTML = "02"
          } else if(num === 2){
               pepperr.style.display = "none"
               foodd.style.display = "none"
               oill.style.display ="inline"
               how.innerHTML = "03"
          } else if(num === 3){
               pepperr.style.display = "none"
               foodd.style.display = "none"
               oill.style.display = "none"
               paprikaa.style.display = "inline"
               how.innerHTML = "04"
          }
     }
     prev.onclick = () => {
          num--
     }
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
     second.innerHTML--
     if (second.innerHTML == 0) {
          second.innerHTML = 59

          minute.innerHTML--
          if (minute.innerHTML == 0) {
               minute.innerHTML = 59

               hour.innerHTML--
               if (hour.innerHTML == 0) {
                    hour.innerHTML = 59

                    day.innerHTML--
                    if (day.innerHTML == -1) {
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


let genderParent = document.querySelector('#gender')
let genBtns = genderParent.querySelectorAll('.calculating__choose-item')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let age = document.querySelector('#age')
let activities = document.querySelectorAll('div[data-active]')
let calculating__result = document.querySelector('.calculating__result').firstChild.nextSibling


let user = {
     gender: 'woman'
}

genBtns.forEach(element => {
     element.onclick = () => {
          genBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))
          element.classList.add('calculating__choose-item_active')
          user.gender = element.getAttribute('data-gen')
     }
});


height.onkeyup = () => {
     user.height = +height.value
}
weight.onkeyup = () => {
     user.weight = +weight.value
}
age.onkeyup = () => {
     user.age = +age.value
}

activities.forEach(item => {
     item.onclick = () => {
          activities.forEach(element => element.classList.remove('calculating__choose-item_active'));
          item.classList.add('calculating__choose-item_active')
          let act = +item.getAttribute('data-active')
          if (user.gender === 'man') {
               let result = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5.
               result = result * act
               calculating__result.innerHTML = Math.round(result)
          } else {
               let result = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) - 161
               result = result * act
               calculating__result.innerHTML = Math.round(result)
          }
     }
})

// var block = document.querySelector('.modal');
// var _change = block.getBoundingClientRect().bottom + window.pageYOffset;
// var blockFloat = block.cloneNode(true);
// block.parentNode.insertBefore(blockFloat, block.nextSibling);
// blockFloat.classList.add('blockFloat');
// window.onscroll = function () {
//      if (window.pageYOffset > _change) {
//           console.log('t')
//           blockFloat.classList.add('show')
//      } else {
//           console.log('f')
//           blockFloat.classList.remove('show')
//      }
// };