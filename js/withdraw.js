document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawValue = document.getElementById("withdraw-value");
    const withdrawValueString = withdrawValue.value;
    const newWithdrawBalance = parseFloat(withdrawValueString);

    withdrawValue.value = '';


    if(isNaN(newWithdrawBalance)  || newWithdrawBalance<0){
        alert ("please provide me a positive amount")
        return;
    }
    
    const withdrawBalance = document.getElementById("withdraw-balance");
    const withdrawBalanceString = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceString);



    
    const mainBalance = document.getElementById("main-balance");
    const mainBalanceString = mainBalance.innerText;
    const currentBalance = parseFloat(mainBalanceString);
    if(mainBalance.innerText<newWithdrawBalance){
        alert("amount is over form current Balance!!!")
        return;
    }
    withdrawBalance.innerText = previousWithdrawBalance + newWithdrawBalance;
    mainBalance.innerText = currentBalance - newWithdrawBalance;
    
    


    
})