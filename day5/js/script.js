window.onload = function() {
    console.log("onload");
const img = document.getElementById('myimg');
const h1 = document.getElementById('h1');
let blur = 40;
let opacitynum = 1;
let num = 0;
let timer1 = setInterval(function() {
  if (blur <= 0) {
    clearInterval(timer1);
  }
  img.style.filter = 'blur(' + blur + 'px)';
  h1.style.opacity = opacitynum;

  opacitynum -= 0.05/2;
  blur -= 1;
}, 100);

let timer2 = setInterval(function() {
    num += 1;
    if (num == 100) {
        clearInterval(timer2);
      }
    
    h1.innerHTML = `${num}%`;
}, 40);

}