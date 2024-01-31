let numbersButtons = document.querySelectorAll(".number-style");
let operationButtons = document.querySelectorAll(".operator-style");
let resultScreen = document.querySelector(".operation-screen");
let currentNumberScreen = document.querySelector(".operation-current");
let equalButton = document.querySelector(".number-style-equal");
let clearButton = document.querySelector(".number-style-clear");

let principalNumber = "";
let secondariNumber = "";
let currentOperator = "none";

const createListeners = function createListenersOfButtons() {

    clearButton.addEventListener("click", (event) => {
        principalNumber = "";
        secondariNumber = "";
        currentOperator = "none";
        resultScreen.textContent = "0";
        currentNumberScreen.textContent = "-";
    });

    equalButton.addEventListener("click", (event) => {
        checkOperator("none");
    });


    for (let i = 0; i < numbersButtons.length; i++) {
        numbersButtons[i].addEventListener("click", (event) => {
            if (currentOperator === "none") {
                if (principalNumber === "") {
                    principalNumber = event.target.attributes[1].value;
                    resultScreen.textContent = principalNumber
                } else {
                    principalNumber = principalNumber.concat(event.target.attributes[1].value);
                    resultScreen.textContent = principalNumber;
                }
            } else {
                secondariNumber = secondariNumber.concat(event.target.attributes[1].value);
                resultScreen.textContent = secondariNumber;
            }


        });
    }

    for (let i = 0; i < operationButtons.length; i++) {
        operationButtons[i].addEventListener("click", (event) => {
            console.log(event.target.attributes[1].value);
            // resultScreen.textContent = principalNumber.concat(event.target.attributes[1].value);
            checkOperator(event.target.attributes[1].value);
        });
    }
}

const checkOperator = function checkOperatorAndOperate(sign) {

        switch (currentOperator) {
            case '+': {
                console.log("it's a plus");
                principalNumber = String(parseInt(principalNumber, 10) + parseInt(secondariNumber, 10));
                currentNumberScreen.textContent = principalNumber;
                currentOperator = sign;
                break;
            }
            case '-': {
                console.log("it's a -");
                principalNumber = String(parseInt(principalNumber, 10) - parseInt(secondariNumber, 10));
                currentNumberScreen.textContent = principalNumber;
                currentOperator = sign;
                break;
            }
            case '*': {
                console.log("it's a *");
                principalNumber = String(parseInt(principalNumber, 10) * parseInt(secondariNumber, 10));
                currentNumberScreen.textContent = principalNumber;
                currentOperator = sign;
                break;
            }
            case '/': {
                console.log("it's a /");
                principalNumber = String(parseInt(principalNumber, 10) / parseInt(secondariNumber, 10));
                currentNumberScreen.textContent = principalNumber;
                currentOperator = sign;
                break;
            }
            case 'none':{
                console.log("sign");
                currentOperator = sign;
                break;
            }
            default: {
                return "Error";
                break;
            }
        }
        secondariNumber = '';
        console.log(currentOperator + "current");



}


createListeners();