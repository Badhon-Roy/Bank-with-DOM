document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositValue = document.getElementById("deposit-input");
    const depositValueString = depositValue.value;
    const newDepositBalance = parseFloat(depositValueString);

    depositValue.value = '';
    if(isNaN(newDepositBalance)  || newDepositBalance<0){
        alert ("please provide me a positive amount")
        return;
    }

    const depositBalance = document.getElementById("deposit-balance");
    const depositBalanceString = depositBalance.innerText;
    const previousDepositeBalance = parseFloat(depositBalanceString);
    

    depositBalance.innerText = previousDepositeBalance + newDepositBalance;

    const mainBalance = document.getElementById("main-balance");
    const mainBalanceString = mainBalance.innerText;
    const currentBalance = parseFloat(mainBalanceString);

    mainBalance.innerText = currentBalance + newDepositBalance;

    

   
})