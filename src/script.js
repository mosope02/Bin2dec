//Declare variables to hold each input/form
const binaryField = document.querySelector('#binaryField')
const decimalField = document.querySelector('#decimalField')
const convert = document.querySelector('#convert')

// convert to Decimal
const bin2Dec = (num) => {
    //convert the number to decimal
    let result = parseInt(num, 2)
    //Display the number in the field for Decimal result
    decimalField.value = result
}

const checkIfBin = () => {
    //Define the regex for strict binary numbers
    let binRegex = /^[0-1]{1,}/g
    let num = binaryField.value;
    //Test the number with the regex rules for if it is binary or not
    let isBin = binRegex.test(num)
    if(isBin) {
        //if it is binary, convert to decimal and display
        bin2Dec(num)
    } else{ 
        //Display an error message and empty the input form
        alert("Enter a valid Binary Number")
        binaryField.value = ""
    }
}

convert.addEventListener('click', checkIfBin)