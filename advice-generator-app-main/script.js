const adviceText = document.getElementById("advice-text");
const adviceID = document.getElementById("advice-ID");
const btn = document.getElementById("btn");

const api_url = "https://api.adviceslip.com/advice";

let getAdvice = () => {
    fetch(api_url)
        .then((data) => data.json())
        .then((item) => {
            adviceText.innerHTML = '<i class="fa-solid fa-quote-left fa-2xs" style="color: #ccd4e0;"></i>' + " " + item.slip.advice + " " + '<i class="fa-solid fa-quote-right fa-2xs" style="color: #ccd4e0;"></i>';
            adviceID.innerText = item.slip.id;
        });
};

window.addEventListener("load", getAdvice);
btn.addEventListener("click", getAdvice);
