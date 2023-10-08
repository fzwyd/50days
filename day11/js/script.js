const Allp = document.querySelectorAll('.afterbox p')
const container = document.querySelector('.container')
const afterbox = document.querySelectorAll('.afterbox')

window.addEventListener('keydown',(event)=>{
    container.style.display = "none"
    afterbox.forEach(item=>{
        item.style.display = "block"
    })
        Allp[0].innerHTML = event.key === ' ' ? 'Space' : event.key
        Allp[1].innerHTML = event.keyCode
        Allp[2].innerHTML = event.code
})