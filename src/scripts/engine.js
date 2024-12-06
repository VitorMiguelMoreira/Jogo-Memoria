const emojis = [
    "😎",
    "😎",
    "🥶",
    "🥶",
    "😡",
    "😡",
    "😈",
    "😈",
    "🤡",
    "🤡",
    "😺",
    "😺",
    "🐺",
    "🐺",
    "🐸",
    "🐸"
]
let openCards = []
let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2 : -1))

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (this.classList.contains("boxOpen") || openCards.length >= 2) {
        return;
    }
    if(openCards. length < 2){
        this.classList.add("boxOpen");
        this.style.visibility = "visible";
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        openCards[0].classList.add("boxOpen");
        openCards[1].classList.add("boxOpen");
    }
    else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    const matchedCards = document.querySelectorAll(".boxMatch");
    if (matchedCards.length === emojis.length) {
        document.querySelector(".venceu").style.visibility = "visible";
    }
}
