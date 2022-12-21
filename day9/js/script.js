window.onload = function(){
    let voice = document.getElementById("applause");;
    const Allbtn = document.querySelectorAll(".btn");
    Allbtn.forEach(btn =>{
        btn.addEventListener("click",()=>{
            voice.pause();
            voice.currentTime = 0;
            let Voicename = btn.innerHTML;
            voice = document.getElementById(Voicename);
            voice.play();
        })
    })
}