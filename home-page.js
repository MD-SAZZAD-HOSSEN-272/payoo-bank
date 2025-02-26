
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const phoneIncorrect = document.getElementById("number-incorrect");
    const pinIncorrect = document.getElementById("pin-incorrect");

    const phoneInput = document.getElementById("phone-input").value;
    const pinInput = document.getElementById("pin-input").value;
    const convertPinInput = parseInt(pinInput);

    if (phoneInput.length === 11) {
        phoneIncorrect.style.display = "none"
        if (convertPinInput === 1245) {
            
            window.location.href = "./main.html"
        }else {
            pinIncorrect.style.display = "block"
        }
    }else {
        phoneIncorrect.style.display = "block"
        
    }
})



