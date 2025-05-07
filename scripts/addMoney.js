document.getElementById("add-money-btn")
.addEventListener("click",function(event){
    event.preventDefault();
   const newAmount = getInputValueById("amount");
   console.log(newAmount);
   const pin = getInputValueById("input-pin-number");
   const accountNumber = document.getElementById("input-account-number").value;
   const existingAmount = getInnerTextById("existing-amount");
   if(accountNumber.length===11){
    if(pin===1234){
        const sum = newAmount + existingAmount;
        document.getElementById("existing-amount").innerText = sum;
    }
   }
   
})