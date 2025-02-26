const dom = {
    enterAmount: document.getElementById("enter-amount"),
    currencyAmount: document.getElementById("currency-amount"),
    selectFrom: document.getElementById("select-from"),
    toCurrency: document.getElementById("to-currency"),
    selectTo: document.getElementById("select-to"),
    convertButton: document.getElementById("convert-button"),
    resetButton: document.getElementById("reset-button"),
    finalValue: document.getElementById("final-value"),
};

let url = "https://v6.exchangerate-api.com/v6/6880e928c542f12ec6425196/latest/USD";
let convertFrom;
let convertTo;
let inputValue;

// Event when currency is changed
dom.selectFrom.addEventListener('change', (event) => {
    convertFrom = `${event.target.value}`;
});

// Event when currency is changed
dom.selectTo.addEventListener('change', (event) => {
    convertTo = `${event.target.value}`;
});

dom.currencyAmount.addEventListener("input", (event) => {
    inputValue = event.target.value;
});


dom.convertButton.addEventListener("click", () => {
    fetch(`${url}`).then(currency => currency.json()).then(displayResults);
});

function displayResults(currency) {
    
}

dom.resetButton.addEventListener("click", () => {
    window.location.reload();
    dom.finalValue.innerHTML = "";

});