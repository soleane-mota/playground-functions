function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNum.length; index++) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNum[index] % 5 === 0) {
      arrayFizzBuzz.push('Buzz');
    } else if (arrayNum[index] % 3 !== 0 && arrayNum[index] % 5 !== 0) {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([9, 25]));