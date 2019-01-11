function checkNumber(number) {

  let numberArray = number.toString().split("").map(Number);

  let checkDigit = numberArray[numberArray.length -1];

  // console.log(numberArray);
  // console.log(checkDigit);

  let alternate = true;
  let sum = 0;

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

  let sumUnitDigit = Number((sum * 9).toString().split("").pop());

  // console.log("unit digit: " + sumUnitDigit);
  // console.log(sum);
  // console.log(typeof sumUnitDigit);
  // console.log(typeof checkDigit);


  return (sumUnitDigit === checkDigit);
}

console.log(checkNumber(79927398713));

module.exports = checkNumber;