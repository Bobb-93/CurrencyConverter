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
dom.selectFrom.addEventListener("change", (event) => {
    // convertFrom = `${event.target.value}`;
    convertFrom = event.target.value;

    console.log(convertFrom);

});

// Event when currency is changed
dom.selectTo.addEventListener("change", (event) => {
    // convertTo = `${event.target.value}`;
    convertTo = event.target.value;

    console.log(convertTo);
    
});

dom.currencyAmount.addEventListener("input", (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
    
});


dom.convertButton.addEventListener("click", () => {
    fetch(`${url}`).then(currency => currency.json()).then(displayResults);
});

function displayResults(currency) {
    let fromRate = currency.rates[convertFrom];
    let toRate = currency.rates[convertTo];

    if (!fromRate || !toRate) {
        console.error("Invalid currency selection.");
        return;
    }

    console.log("Convert From:", convertFrom, "Convert To:", convertTo);
    console.log(fromRate);
    console.log(toRate);
    console.log(currency);
    
    dom.finalValue.innerText = ((toRate / fromRate) * inputValue).toFixed(2);
}

dom.resetButton.addEventListener("click", () => {
    window.location.reload();
    dom.finalValue.innerHTML = "";

});