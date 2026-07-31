////////////// Бекграунд сайту ////////////

const pageBg = document.querySelector("#header-bg")

const imgSun = document.querySelector(".header_box--content--background--sun")

pageBg.addEventListener("click", () => {

    imgSun.classList.toggle("header_box--content--background--sun")
    imgSun.classList.toggle("header_box--content--background--moon")
})

///////////////////// Фильтер /////////////////////

const headerFilterOpen = document.querySelector('#filter-open')

const headerFilter = document.querySelector("#filter")

headerFilterOpen.addEventListener("click", () => {
    headerFilter.classList.toggle("header_filter")
    headerFilter.classList.toggle("header_filter--hide")
})

////////////////// начальна модалка //////////////////////

const close = document.querySelector("#close")

const startModal = document.querySelector("#start-modal")

const submitform = document.querySelector("#start-modal-submit")

const userName = document.querySelector("#userName")

const inputName = document.querySelector("#input-name")

close.addEventListener("click", () => {
    startModal.style.opacity = "0%"
    userName.textContent = `Вітаємо, гість`
})

submitform.addEventListener("submit", event => {
    event.preventDefault()
    if (inputName.value.trim()) {
        userName.textContent = `Вітаємо, ${inputName.value}`
    } else {
        userName.textContent = `Вітаємо, гість`

    }
    startModal.style.opacity = "0%"
})

//////////////////// Games ////////////////// :

const games = [
    {
        id: 1,
        name: 'Високосний калькулятор',
        category: 'numerical',

    },
    {
        id: 2,
        name: 'Вгадай число',
        category: 'numerical',

    },
    {
        id: 3,
        name: 'Камінь-Ножиці-Папір',
        category: 'game',

    },
    {
        id: 4,
        name: 'Калькулятор',
        category: 'numerical',

    },
    {
        id: 5,
        name: 'Калькулятор часу',
        category: 'numerical',

    },
    {
        id: 6,
        name: 'Google динозаврик',
        category: 'game',

    },
    {
        id: 7,
        name: 'Футбол',
        category: 'game',

    },
    {
        id: 8,
        name: 'Найбільше число',
        category: 'numerical',

    },
    {
        id: 9,
        name: 'Наша команда',
        category: 'acquaintance',

    },
    {
        id: 10,
        name: 'Вчений',
        category: 'acquaintance',

    },
]

//////////////////// year //////////////////


const year = document.querySelector("#year")

const yearInput = document.querySelector("#year-input")

const yearAnswer = document.querySelector("#year-answer")

year.addEventListener("submit", event => {
    event.preventDefault()
    if (yearInput.value % 4 === 0) {
        yearAnswer.style.color = "#039900"
        yearAnswer.textContent = "Ви народилися у високосний рік!"
    } else {
        yearAnswer.style.color = "#990000"
        yearAnswer.textContent = "Ви народилися не у високосний рік!"
    }
})