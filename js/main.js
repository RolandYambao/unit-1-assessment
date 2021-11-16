const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
let answer = document.getElementById("answer");
let input = document.getElementById("input");
input.value = 1;

function operation() {
    buttonPlus.addEventListener("mouseover", function() {
        buttonPlus.style.color = "grey";
        buttonPlus.style.background = "white";
    })
    buttonPlus.addEventListener("mouseleave", function() {
        buttonPlus.style.color = "white";
        buttonPlus.style.background = "grey";
    })
    buttonMinus.addEventListener("mouseover", function() {
        buttonMinus.style.color = "grey";
        buttonMinus.style.background = "white";
    })
    buttonMinus.addEventListener("mouseleave", function() {
        buttonMinus.style.color = "white";
        buttonMinus.style.background = "grey";
    })
    buttonPlus.addEventListener("click", function () {
        let answerValue = parseInt(answer.innerText);
        let inputValue = parseInt(input.value);
        answerValue = answerValue + inputValue;
        answer.innerText = answerValue;
        if (answerValue < 0) {
            answer.style.color = "red";
        } else {
            answer.style.color = "black";
        }
    })
    buttonMinus.addEventListener("click", function () {
        let answerValue = parseInt(answer.innerText);
        let inputValue = parseInt(input.value);
        answerValue = answerValue - inputValue;
        answer.innerText = answerValue;
        if (answerValue < 0) {
            answer.style.color = "red";
        } else {
            answer.style.color = "black";
        }
    })
}

operation();