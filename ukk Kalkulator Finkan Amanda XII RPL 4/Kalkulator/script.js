const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "0";

const clearDisplay = () => {
    output = "0";
    display.value = output;
};

const deleteLast = () => {
    let displayValue = display.value;
    if (displayValue.length === 1) {
        display.value = '0';
    } else {
        display.value = displayValue.slice(0, -1);
    }
};

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output);
    } else if (btnValue === "AC") {
        clearDisplay();
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
        if (output === "") output = "0";
    } else {
        if (output === "0" && !isNaN(btnValue)) output = "";
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
