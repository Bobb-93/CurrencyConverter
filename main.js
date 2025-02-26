const dom ={
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

dom.resetButton.addEventListener("click", () =>{
    window.location.reload();
    dom.finalValue.innerHTML = "";
    
});