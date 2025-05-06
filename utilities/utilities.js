function getInputValueById(id){
    const amount = document.getElementById(id).value;
    const convertedValue = parseFloat(amount);
    return convertedValue;
   
}