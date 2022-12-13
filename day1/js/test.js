const Allstatic = document.querySelectorAll('.static')

Allstatic.forEach((static) => {
    static.addEventListener('click', (e) => {
        removeClass()
        static.classList.add('active')
    })
})

// Remove

function removeClass() {
    const static = document.querySelectorAll('.static')
    static.forEach((static) => {
        static.classList.remove('active')
    })
}