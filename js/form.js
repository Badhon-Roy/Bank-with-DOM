document.getElementById("submit-btn").addEventListener('click', function(){
    const inputEmail = document.getElementById("input-email");
    const emailValue = inputEmail.value;
    const inputPassword = document.getElementById("input-password");
    const passwordValue = inputPassword.value;
    if(emailValue == "roybadhon@gmail.com" && passwordValue == 362589 ){
        window.location.href = "bank.html"
    }
    else{
        alert("please correct detels all")
    }


    inputEmail.value = '';
    inputPassword.value = '';
})