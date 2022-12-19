// window.onload = function() {
    
// }
const contents = document.querySelectorAll(".content");
    window.addEventListener("scroll", ()=>{
        contents.forEach(content => {
            const windowHeight = window.innerHeight / 4 * 3;
            const height = content.getBoundingClientRect().top;
            if(height < windowHeight){
                content.classList.add("active");
            }else{
                content.classList.remove("active");
            }
            
        })
    })