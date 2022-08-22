const anchors = document.querySelectorAll('a[href*="#"]')
const hamburger =document.querySelector(".hamburger")
const btn = document.querySelector(".menu")
const menu = document.querySelector(".navigation")
const navLinks = document.querySelectorAll('.nav-link');
const navItems = document.querySelectorAll('.nav-item');
const body = document.querySelector("body")
const btnTheme = document.querySelector(".theme")
const moon = document.querySelector(".moon")
const soln = document.querySelector(".soln")

const portfolioBtns = document.querySelector(".buttons-times-years")
const btnYear = portfolioBtns.querySelectorAll(".season")
const portfolioImages = document.querySelectorAll('.image')

const languages = document.querySelectorAll(".language")
const en = document.querySelector('.en')
const ru = document.querySelector('.ru')

let lang = "en"
let theme = "light"


navItems.forEach(l => {
    l.addEventListener("click", () => {
        hamburger.classList.remove("active")
    })
})

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
    menu.classList.toggle("open");
    body.classList.remove("lock");
    }
}


const toggleBtn = (event) => {
    if(event.target.classList.contains("season")) {
    btnYear.forEach(btn => btn.classList.remove("btn-active"))
        event.target.classList.add("btn-active")
        portfolioImages.forEach( (img , index )=> img.src = "./assets/img/" + (event.target.dataset.i18n) + "/" + (index + 1) + ".jpg")
    }
}

localStorage.getItem("YearItems")


portfolioBtns.addEventListener("click", toggleBtn)


btnTheme.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    moon.classList.toggle("act")
    soln.classList.toggle("act")

    if (soln.classList.contains("act")) { 
        theme = "dark"
    } else {
        theme = "light"
    }
})

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    hamburger.classList.toggle("active");
    body.classList.toggle("lock");
})

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


const i18Obj = {
    "en": {
            "Skills": 'Skills',
            "Portfolio": 'Portfolio',
            "Video": 'Video',
            "Price": 'Price',
            "Contacts": 'Contacts',
            "hero-title": 'Alexa Rise',
            "hero-cite": 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
            "hero-btn": 'Hire me',
            "Skills-item-1-1": 'Digital photography',
            "Skills-item-1-2": 'High-quality photos in the studio and on the nature',
            "Skills-item-2-1": 'Video shooting',
            "Skills-item-2-2": 'Capture your moments so that they always stay with you',
            "Skills-item-3-1": 'Retouch',
            "Skills-item-3-2": 'I strive to make photography surpass reality',
            "Skills-item-4-1": 'Audio',
            "Skills-item-4-2": 'Professional sounds recording for video, advertising, portfolio',
            "Winter": 'Winter',
            "Spring": 'Spring',
            "Summer": 'Summer',
            "Autunm": 'Autunm',
            "Price-title-1": 'Standard',
            "Price-service-1":'500$',
            "Price-service-span-1-1": 'One location',
            "Price-service-span-1-2": '120 photos in color',
            "Price-service-span-1-3": '12 photos in retouch',
            "Price-service-span-1-4": 'Readiness 2-3 weeks',
            "Price-service-span-1-5": 'Make up, visage',
            "Price-btn": 'Order shooting',
            "Price-title-2": 'Premium',
            "Price-service-2": '700$',
            "Price-service-span-2-1": 'One or two locations',
            "Price-service-span-2-2": '200 photos in color',
            "Price-service-span-2-3": '20 photos in retouch',
            "Price-service-span-2-4": 'Readiness 1-2 weeks',
            "Price-service-span-2-5": 'Make up, visage',
            "Price-title-3": 'Gold',
            "Price-service-3": '1000$',
            "Price-service-span-3-1": 'Three locations or more',
            "Price-service-span-3-2": '300 photos in color',
            "Price-service-span-3-3": '50 photos in retouch',
            "Price-service-span-3-4": 'Readiness 1 week',
            "Price-service-span-3-5": 'Make up, visage, hairstyle',
            "Contact-title": 'Contact me'
            }, 
        "ru": {
            "Skills": 'Навыки',
            "Portfolio": 'Портфолио',
            "Video": 'Видео',
            "Price": 'Цены',
            "Contacts": 'Контакты',
            "hero-title": 'Алекса Райс',
            "hero-cite": 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
            "hero-btn": 'Пригласить',
            "Skills-item-1-1": 'Фотография',
            "Skills-item-1-2": 'Высококачественные фото в студии и на природе',
            "Skills-item-2-1": 'Видеосъемка',
            "Skills-item-2-2": 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
            "Skills-item-3-1": 'Ретушь',
            "Skills-item-3-2": 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
            "Skills-item-4-1": 'Звук',
            "Skills-item-4-2": 'Профессиональная запись звука для видео, рекламы, портфолио',
            "Winter": 'Зима',
            "Spring": 'Весна',
            "Summer": 'Лето',
            "Autunm": 'Осень',
            "Price-title-1": 'Standard',
            "Price-service-1":'500$',
            "Price-service-span-1-1": 'Одна локация',
            "Price-service-span-1-2": '120 цветных фото',
            "Price-service-span-1-3": '12 отретушированных фото',
            "Price-service-span-1-4": 'Готовность через 2-3 недели',
            "Price-service-span-1-5": 'Макияж, визаж',
            "Price-btn": 'Заказать съемку',
            "Price-title-2": 'Premium',
            "Price-service-2": '700$',
            "Price-service-span-2-1": 'Одна-две локации',
            "Price-service-span-2-2": '200 цветных фото',
            "Price-service-span-2-3": '20 отретушированных фото',
            "Price-service-span-2-4": 'Готовность через 1-2 недели',
            "Price-service-span-2-5": 'Макияж, визаж',
            "Price-title-3": 'Gold',
            "Price-service-3": '1000$',
            "Price-service-span-3-1": 'Три локации и больше',
            "Price-service-span-3-2": '300 цветных фото',
            "Price-service-span-3-3": '50 отретушированных фото',
            "Price-service-span-3-4": 'Готовность через 1 неделю',
            "Price-service-span-3-5": 'Макияж, визаж, прическа',
            "Contact-title": 'Свяжитесь со мной'
            }
}


const getTranslate = (event) => {
  document.querySelectorAll('[data-i18n]').forEach(x=>{
    x.innerHTML=i18Obj[event.target.innerHTML][x.dataset.i18n]
});

languages.forEach(elem => elem.classList.remove('lanActiv'))
    event.target.classList.add('lanActiv');
    if(en.classList.contains('lanActiv')){
        lang = "en"
    } else {
        lang = 'ru'
    }
}

en.addEventListener('click', getTranslate);
ru.addEventListener('click', getTranslate);


const buttonArr = document.querySelectorAll('.buttons');
  
buttonArr.forEach((x, i)=>{x.addEventListener('click', (e) => {
const x = e.clientX
const y = e.clientY

const buttonTop = e.target.getBoundingClientRect().y
const buttonLeft = e.target.getBoundingClientRect().x


const xInside = (x - buttonLeft)*0.78
const yInside = (y - buttonTop)*0.9

const circle = document.createElement('span')
circle.classList.add('circle')
circle.style.top = yInside + 'px'
circle.style.left = xInside + 'px'

this.appendChild(circle)

setTimeout(() => circle.remove(), 500)
})})


console.log("1.Вёрстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету +48 \n 4. Требования к css + 12 \n 5. Интерактивность, реализуемая через css +20 \n Итого: 100 баллов.");
