module.exports = checkNumber;

function checkNumber(number) {

  //Turn number to an array and log the last digit as the check
  let numberArray = number.toString().split("").map(Number);
  let checkDigit = numberArray[numberArray.length -1];

  //Create a boolean so we can multiply every second digit by 2
  let alternate = true;
  let sum = 0;

  //Cycle through array backwards, starting at second to last digit.
  for (var i = numberArray.length - 2; i >= 0; i --){
    var num = numberArray[i];
    if (alternate) {
      num *= 2;
    }
    if (num > 9) {
      num -= 9;
    }
      sum += num;
      alternate = !alternate;
  }

  //Figure out the number which we compare to the checkDigit
  let sumUnitDigit = Number((sum * 9).toString().split("").pop());

  return (sumUnitDigit === checkDigit);
}

