const dom ={
    resetButton: document.getElementById("reset-button")
};

dom.resetButton.addEventListener("click", () =>{
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
    
});