document.getElementById("cash-withdraw-btn")
.addEventListener("click",function(event){
    event.preventDefault();
    const withdrawAmount = getInputValueById("amount-cashout");
    
    const availableAmount = getInnerTextById("existing-amount");
    
    const pinForWithdraw = getInputValueById("input-pin-cashout");
   
    const accNumber = document.getElementById("input-account-number-cash").value;
    if(accNumber.length===11){
        if(pinForWithdraw===1234){
            const available = availableAmount - withdrawAmount;
    
            document.getElementById("existing-amount").innerText=available;
        }
    }

})