document.getElementById("add-money-btn")
.addEventListener("click",function(event){
    event.preventDefault();
   const amount = getInputValueById("amount");

   const pin = getInputValueById("input-pin-number");
   const account = getElementById("input-account-number");
   if(account.length===11){
    if(pin===1234){
        //mainBalance update
    }
    else{
        // something wrong
    }
   }
})