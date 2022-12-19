window.onload = function() {
    const main = document.querySelector('.main');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        if(main.classList[1] === 'active'){
            main.classList.remove('active');
        }else{
            main.classList.add('active');
        }
    })
}