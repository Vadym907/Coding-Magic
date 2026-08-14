////////////// Бекграунд сайту ////////////

const logo = document.querySelector("#logo")

const allContent = document.querySelectorAll("section,div, header,footer")

const alltext = document.querySelectorAll("p, h1,h2,h3,h4, a, li")

const pageBg = document.querySelector("#header-bg")

const imgSun = document.querySelector(".header_box--content--background--sun")

const imgSunBox = document.querySelector("#header-bg-div")

const line = document.querySelectorAll(".line")

const main = document.querySelector("main")

const operation = document.querySelectorAll(".calculate_form--box--operation")

pageBg.addEventListener("click", () => {

    imgSun.classList.toggle("header_box--content--background--sun")
    imgSun.classList.toggle("header_box--content--background--moon")

    if (imgSun.classList.contains("header_box--content--background--moon")) {
        document.body.style.backgroundColor = "#696969"
        headerFilterOpen.src = "./imgs/vector-white.svg"

        allContent.forEach(item => {
            item.style.backgroundColor = "black"
            item.style.borderColor = "white"
        })
        alltext.forEach(item => {
            item.style.color = "white"
        })
        operation.forEach(item => {
            item.style.backgroundColor = "white"
            item.style.color = "black"
        })

        equals.style.backgroundColor = "white"
        equals.style.color = "black"

        logo.src = "./imgs/coding-magic–white.svg"
        pageBg.style.backgroundColor = "#7A7A7A"
        line.forEach(item => {
            item.style.border = "1px solid #fff"
        })
        calculateResult.style.backgroundColor = "#D7D7D7"
    } else {
        document.body.style.backgroundColor = "white"
        headerFilterOpen.src = "./imgs/vector.svg"
        document.body.style.transition = "300ms ease backgroundColor"
        alltext.forEach(item => {
            item.style.color = "black"
        })
        allContent.forEach(item => {
            item.style.backgroundColor = "white"
            item.style.borderColor = "black"
        })
        operation.forEach(item => {
            item.style.backgroundColor = "black"
            item.style.color = "#ffffff"
        })

        logo.src = "./imgs/coding-magic.svg"
        pageBg.style.backgroundColor = "#7A7A7A"
        line.forEach(item => {
            item.style.border = "1px solid #000"
        })
        equals.style.backgroundColor = "black"
        equals.style.color = "white"
        calculateResult.style.backgroundColor = "#D7D7D7"
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
    } else if (guessInput.value == 0) {
        guessAnswer.textContent = `У цій грі немає 0!`
        guessAnswer.style.color = "#990000"
    }
    else {
        guessAnswer.style.color = "#990000"
        guessAnswer.textContent = `Ви програли, комп’ютер загадав ${random} `
    }
})


/////////////// Камінь - ножиці - папір ///////////////

const stone = document.querySelector("#stone")
const scissors = document.querySelector("#scissors")
const paper = document.querySelector("#paper")

const stoneResult = document.querySelector("#stone-result")

const pcResult = document.querySelector("#result")

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
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            stoneResult.style.color = "#fff"
        } else {
            stoneResult.style.color = "#000"
        }
        pcResult.textContent = "Камінь"
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Ви виграли раунд!"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        pcResult.textContent = "Ножниці"
        userScore.textContent = `Ви - ${userScoreNum}`
    } else {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
        pcResult.textContent = "Бумага"
    }
})

scissors.addEventListener("click", () => {

    const pcAnswer = stoneRandom()

    if (pcAnswer === 'stone') {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcResult.textContent = "Камінь"
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Нічия"
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            stoneResult.style.color = "#fff"
        } else {
            stoneResult.style.color = "#000"
        }
        pcResult.textContent = "Ножниці"

    } else {
        stoneResult.textContent = "Ви виграли раунд!"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        pcResult.textContent = "Бумага"
        userScore.textContent = `Ви - ${userScoreNum}`
    }
})

paper.addEventListener("click", () => {

    const pcAnswer = stoneRandom()

    if (pcAnswer === 'stone') {
        stoneResult.textContent = "Ви виграли раунд!"
        pcResult.textContent = "Камінь"
        stoneResult.style.color = "#039900"
        userScoreNum += 1
        userScore.textContent = `Ви - ${userScoreNum}`
    } else if (pcAnswer === 'scissors') {
        stoneResult.textContent = "Комп’ютер виграв раунд!"
        stoneResult.style.color = "#990000"
        pcScoreNum += 1
        pcResult.textContent = "Ножниці"
        pcScore.textContent = `Комп’ютер - ${pcScoreNum}`
    } else {
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            stoneResult.style.color = "#fff"
        } else {
            stoneResult.style.color = "#000"
        }
        pcResult.textContent = "Бумага"
        stoneResult.textContent = "Нічия"
    }
})


/////////////////////////// calculate /////////////////////


const numberOne = document.querySelector("#number-one")
const numberTwo = document.querySelector("#number-two")

const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")

const equals = document.querySelector("#equals")
const calculateResult = document.querySelector("#calculate-result")

const calculateForm = document.querySelector("#calculate-form")

let action = ""

let color = ""

plus.addEventListener("click", () => {
    action = "plus"
    if (color === "") {
        plus.style.transition = "300ms ease background-color"
        plus.style.backgroundColor = "#505050"
        color = "plus"
    } else {
        plus.style.transition = "300ms ease background-color"
        plus.style.backgroundColor = "#505050"
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            minus.style.backgroundColor = "#ffff"
            divide.style.backgroundColor = "#fff"
            multiply.style.backgroundColor = "#fff"
        } else {
            minus.style.backgroundColor = "#000000"
            divide.style.backgroundColor = "#000000"
            multiply.style.backgroundColor = "#000000"
        }
    }
})
minus.addEventListener("click", () => {
    action = "minus"
    if (color === "") {
        minus.style.transition = "300ms ease background-color"
        minus.style.backgroundColor = "#505050"
        color = "minus"
    } else {
        minus.style.transition = "300ms ease background-color"
        minus.style.backgroundColor = "#505050"

        if (imgSun.classList.contains("header_box--content--background--moon")) {
            plus.style.backgroundColor = "#ffff"
            divide.style.backgroundColor = "#fff"
            multiply.style.backgroundColor = "#fff"
        } else {
            plus.style.backgroundColor = "#000000"
            divide.style.backgroundColor = "#000000"
            multiply.style.backgroundColor = "#000000"
        }

    }
})
divide.addEventListener("click", () => {
    action = "divide"
    if (color === "") {
        divide.style.transition = "300ms ease background-color"
        divide.style.backgroundColor = "#505050"
        color = "divide"
    } else {
        divide.style.transition = "300ms ease background-color"
        divide.style.backgroundColor = "#505050"
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            plus.style.backgroundColor = "#ffff"
            minus.style.backgroundColor = "#fff"
            multiply.style.backgroundColor = "#fff"
        } else {
            plus.style.backgroundColor = "#000000"
            minus.style.backgroundColor = "#000000"
            multiply.style.backgroundColor = "#000000"
        }
    }
})
multiply.addEventListener("click", () => {
    action = "multiply"
    if (color === "") {
        multiply.style.transition = "300ms ease background-color"
        multiply.style.backgroundColor = "#505050"
        color = "multiply"
    } else {
        multiply.style.transition = "300ms ease background-color"
        multiply.style.backgroundColor = "#505050"
        if (imgSun.classList.contains("header_box--content--background--moon")) {
            plus.style.backgroundColor = "#ffff"
            divide.style.backgroundColor = "#fff"
            minus.style.backgroundColor = "#fff"
        } else {
            plus.style.backgroundColor = "#000000"
            divide.style.backgroundColor = "#000000"
            minus.style.backgroundColor = "#000000"
        }
    }
})

calculateForm.addEventListener("submit", event => {
    event.preventDefault()
    switch (action) {
        case 'plus':
            calculateResult.textContent = `Сумма чисел ${numberOne.value} і ${numberTwo.value} = ${Number(numberOne.value) + Number(numberTwo.value)}`

            break;

        case 'minus':
            calculateResult.textContent = `Різниця чисел ${numberOne.value} і ${numberTwo.value} = ${Number(numberOne.value) - Number(numberTwo.value)}`
            break;

        case 'multiply':
            calculateResult.textContent = `Добуток чисел ${numberOne.value} і ${numberTwo.value} = ${Number(numberOne.value) * Number(numberTwo.value)}`
            break;

        case 'divide':
            if (numberTwo.value === "0") {
                calculateResult.textContent = "На 0 не можна ділити!"
            } else {
                calculateResult.textContent = `Частка чисел ${numberOne.value} і ${numberTwo.value} = ${Number(numberOne.value) / Number(numberTwo.value)}`
            }
            break;
        default:
            break;
    }
})


//////////////////////////// time- calculate ////////////////////////////

const timeCalculate = document.querySelector("#time-calculate")
const timeCalculateInput = document.querySelector("#time-calculate-input")
const timeCalculateText = document.querySelector("#time-calculate-text")

timeCalculate.addEventListener("submit", event => {
    event.preventDefault()
    const time = Number(timeCalculateInput.value)

    if (time < 60) {
        timeCalculateText.textContent = `${time} хв.`
    } else if (time < 1440) {
        timeCalculateText.textContent = `${Math.floor(time / 60)} год. ${Math.floor(time % 60)} хв.`
    } else {
        timeCalculateText.textContent = `${Math.floor(time / 1440)} дн. ${Math.floor(time % 1440 / 60)} год. ${Math.floor(time % 60)} хв.`
    }
})


// ///////////////////////// dino /////////////////////

// const dinoGame = document.querySelector("#dino-game")
// const dino = document.querySelector("#dino")
// const score = document.querySelector("#dino-score")
// const record = document.querySelector("#record")

// document.body.addEventListener("keypress", (event) => {
//     let dinoScore = 0
//     if (event.code === "space") {
//         setInterval(() => {
//         dinoScore += 1
//         record.textContent = dinoScore
//         }, 200);
//         setInterval()
//     }
// })

