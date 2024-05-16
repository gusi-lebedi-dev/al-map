document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll('[data-country]');
    elems.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
            const country = elem.getAttribute('data-country')
            elems.forEach((e) => {
                if (e.getAttribute('data-country') === country) {
                    e.classList.add('map-hover')
                }
            })
        })
        elem.addEventListener('mouseleave', () => {
            elems.forEach((e) => {
                e.classList.remove('map-hover')
            })
        })
        elem.addEventListener('click', () => {


            const country = elem.getAttribute('data-country')
            const number = elem.getAttribute('data-number')
            const total = elem.getAttribute('data-total')

            const countryBlock = document.querySelector('.country')
            const numberBlock = document.querySelector('.number')
            const totalBlock = document.querySelector('.total')

            const infoCountry = document.querySelector('.info-country')

            elems.forEach((e) => {
                e.classList.remove('active')
                if (e.getAttribute('data-country') === country) {
                    e.classList.add('active')
                }
            })
            infoCountry.classList.add('open-info-country')
            countryBlock.innerHTML ="Страна: " + country
            numberBlock.innerHTML = "Количество распространенных случаев: " + number
            totalBlock.innerHTML = "Общая численность населения: " + total
        })
    })
})

