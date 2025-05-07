document.getElementById("login-btn")
.addEventListener("click",function(event){
    event.preventDefault();
    const loginAccountNumber = document.getElementById("input-account-number-login").value;
    const myPin = document.getElementById("pin-number").value;
    const convertedmyPin = parseInt(myPin);
   
    if(loginAccountNumber.length===11){
        if(convertedmyPin===1234){
            window.location.href = "./main.html";
        }
    }
  
})