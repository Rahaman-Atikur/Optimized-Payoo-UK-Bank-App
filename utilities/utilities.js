function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id){
    const text = document.getElementById("existing-amount").innerText;
    const convertedText = parseFloat(text);
    return convertedText;
}

function getPinById(){
    const loginPin = document.getElementById(id).value;
    const convertedPin = parseInt(loginPin);
    return convertedPin;
}

function getToggleByIdAndStatus(id,status){
    document.getElementById(id).style.display=status;
}
