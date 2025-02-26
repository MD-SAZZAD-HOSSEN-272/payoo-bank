
function getInputValueByIdConverted(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getInnerTextByIdConverted(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextValue(id, value) {
    document.getElementById(id).innerText = value;
}


// toggle 

function setToggle(id, status) {
    document.getElementById(id).style.display = status;
}