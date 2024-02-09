let password = document.querySelector("#password");
let passwordRepeat = document.querySelector("#password_confirm");
let button = document.querySelector("#form-button");
let errorText = document.querySelector(".error-passwords");

button.addEventListener("click", (event) => {
  
    if (password.value === "") {
       
        errorText.innerText = "Password is empty.";
        event.preventDefault();
    } else if (password.value === passwordRepeat.value) {
        console.log("yay");
        errorText.innerText = "";
    } else {
        console.log("nay");
        errorText.innerText = "* Passwords don't match."
        event.preventDefault();
    }

})
