const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
let answer = document.getElementById("answer");
let input = document.getElementById("input");

function operation() {
    buttonPlus.addEventListener("click", function () {
        let answerValue = parseInt(answer.innerText);
        let inputValue = parseInt(input.value);
        answerValue = answerValue + inputValue;
        answer.innerText = answerValue;
    })
    buttonMinus.addEventListener("click", function () {
        let answerValue = parseInt(answer.innerText);
        let inputValue = parseInt(input.value);
        answerValue = answerValue - inputValue;
        answer.innerText = answerValue;
    })
}

operation();