const btn1 = document.getElementById('open')
const btn2 = document.getElementById('close')

btn1.addEventListener('click', () => {
    console.log('btn1 clicked');
    document.querySelector('.container').classList.add('active');
    document.querySelector('.cricle').classList.add('cricleactive');
    document.querySelector('.view').classList.add('viewactive');
})

btn2.addEventListener('click', () => {
    console.log('btn2 clicked');
    document.querySelector('.container').classList.remove('active');
    document.querySelector('.cricle').classList.remove('cricleactive');
    document.querySelector('.view').classList.remove('viewactive');
})