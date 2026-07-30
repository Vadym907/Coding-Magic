const pageBg = document.querySelector("#header-bg")

const imgSun = document.querySelector(".header_box--content--background--sun")

pageBg.addEventListener("click", () => {

    imgSun.classList.toggle("header_box--content--background--sun")
    imgSun.classList.toggle("header_box--content--background--moon")
})

const headerFilterOpen = document.querySelector('#filter-open')

const headerFilter = document.querySelector("#filter")

headerFilterOpen.addEventListener("click", () => {
    headerFilter.classList.toggle("header_filter")
    headerFilter.classList.toggle("header_filter--hide")
})

const close = document.querySelector("#close")

const startModal = document.querySelector("#start-modal")

const submitform = document.querySelector("#start-modal-submit")

const userName = document.querySelector("#userName")

const inputName = document.querySelector("#input-name")

close.addEventListener("click", () => {
    startModal.style.opacity = "0%"
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
