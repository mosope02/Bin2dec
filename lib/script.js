'use strict';

//Declare variables to hold each input/form
var binaryField = document.querySelector('#binaryField');
var decimalField = document.querySelector('#decimalField');
var convert = document.querySelector('#convert');

// convert to Decimal
var bin2Dec = function bin2Dec(num) {
    //convert the number to decimal
    var result = parseInt(num, 2);
    //Display the number in the field for Decimal result
    decimalField.value = result;
};

var checkIfBin = function checkIfBin() {
    //Define the regex for strict binary numbers
    var binRegex = /^[0-1]{1,}/g;
    var num = binaryField.value;
    //Test the number with the regex rules for if it is binary or not
    var isBin = binRegex.test(num);
    if (isBin) {
        //if it is binary, convert to decimal and display
        bin2Dec(num);
    } else {
        //Display an error message and empty the input form
        alert("Enter a valid Binary Number");
        binaryField.value = "";
    }
};

convert.addEventListener('click', checkIfBin);