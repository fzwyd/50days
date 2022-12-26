const btn = document.querySelector('.btn');
const text = document.querySelector('.p1');

btn.addEventListener('click',getText)

 async function getText() {
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    text.innerHTML = data.joke;
    console.log(data);
    console.log("clicked");
}