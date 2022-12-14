window.onload=function(){
    const cricles = document.querySelectorAll('.cricle');
    const line = document.getElementById('line2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    var length;

    btn1.addEventListener('click', () => {
        length = document.querySelectorAll('.active').length;
        cricles[length - 1].classList.remove('active');
        line.style.width = (length - 2) * (200/3) + 'px';
        console.log(length);
        if(length < 3){
            btn1.setAttribute('class','disabled');
            btn1.setAttribute('disabled','');
            return 0;
        }else{
            btn2.removeAttribute('class');
            btn2.removeAttribute('disabled','');
        }
    })

    btn2.addEventListener('click', () => {
        length = document.querySelectorAll('.active').length;
        cricles[length].classList.add('active');
        line.style.width = length * (200/3) + 'px';
        console.log(length);
        if(length > 2){
            btn2.setAttribute('class','disabled');
            btn2.setAttribute('disabled','');
            return 0;
        }else{
            btn1.removeAttribute('class');
            btn1.removeAttribute('disabled','');
        }
    })


};