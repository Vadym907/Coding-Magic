////////////// Бекграунд сайту ////////////

const logo = document.querySelector("#logo")

const allContent = document.querySelectorAll("section,div")

const alltext = document.querySelectorAll("p, h1,h2,h3,h4, a, li")

const pageBg = document.querySelector("#header-bg")

const imgSun = document.querySelector(".header_box--content--background--sun")

const imgSunBox = document.querySelector("#header-bg-div")

const line = document.querySelectorAll(".line")

pageBg.addEventListener("click", () => {

    imgSun.classList.toggle("header_box--content--background--sun")
    imgSun.classList.toggle("header_box--content--background--moon")

    if (imgSun.classList.contains("header_box--content--background--moon")) {
        document.body.style.backgroundColor = "black"
        allContent.forEach(item => {
            item.style.backgroundColor = "black"
        })
        alltext.forEach(item => {
            item.style.color = "white"
        })
        logo.src = "./imgs/coding-magic–white.svg"
        pageBg.style.backgroundColor = "#7A7A7A"
        line.forEach(item => {
            item.style.border = "1px solid #fff"
        })
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.transition = "300ms ease backgroundColor"
        alltext.forEach(item => {
            item.style.color = "black"
        })
        allContent.forEach(item => {
            item.style.backgroundColor = "white"
        })
        logo.src = "./imgs/coding-magic.svg"
        pageBg.style.backgroundColor = "#7A7A7A"
        line.forEach(item => {
            item.style.border = "1px solid #000"
        })
    }
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
    startModal.style.display = "none"
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
    startModal.style.display = "none"
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

////////////////// guess //////////////


const guess = document.querySelector("#guess")

const guessInput = document.querySelector("#guess-input")

const guessAnswer = document.querySelector("#guess-answer")


guess.addEventListener("submit", event => {
    event.preventDefault()

    let random = Math.random() * 10
    random = Math.floor(random) + 1

    if (guessInput.value == random) {
        guessAnswer.style.color = "#039900"
        guessAnswer.textContent = `Вітаю, ви вгадали число! ${random} `
    } else {
        guessAnswer.style.color = "#990000"
        guessAnswer.textContent = `Ви програли, комп’ютер загадав ${random} `
    }
})


/////////////// Камінь - ножиці - папір ///////////////

const stone = document.querySelector("#stone")
const scissors = document.querySelector("#scissors")
const paper = document.querySelector("#paper")

const stoneResult = document.querySelector("#stone-result")

const pcScore = document.querySelector('#pcScore')
let pcScoreNum = 0
const userScore = document.querySelector('#userScore')
let userScoreNum = 0

function stoneRandom() {
    let stRandom = Math.random() * 10
    stRandom = Math.floor(stRandom)
    if (stRandom <= 3) {
        stRandom = "stone"
    } else if (stRandom <= 6) {
        stRandom = "scissors"
    } else {
        stRandom = "paper"
    }
    return stRandom
}

stone.addEventListener("click", () => {

    const pcAnswer = stoneRandom()

    if (pcAnswer === 'stone') {
        stoneResult.textContent = "Нічия"
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Ви виграли раунд!"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        userScore.textContent = `Ви - ${userScoreNum}`
    } else {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
    }
})

scissors.addEventListener("click", () => {

    const pcAnswer = stoneRandom()

    if (pcAnswer === 'stone') {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Нічия"

    } else {
        stoneResult.textContent = "Ви виграли раунд!"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        userScore.textContent = `Ви - ${userScoreNum}`
    }
})

paper.addEventListener("click", () => {

    const pcAnswer = stoneRandom()

    if (pcAnswer === 'stone') {
        stoneResult.textContent = "Ви виграли раунд!"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        userScore.textContent = `Ви - ${userScoreNum}`
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
    } else {
        stoneResult.textContent = "Нічия"
    }
})