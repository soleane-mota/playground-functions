// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(period) {
  let words = [];
  let word = '';
  for (let index = 0; index < period.length; index += 1) {
    if (period[index] !== ' ') {
      word += period[index];
    }
  }
  words.push(word);
  return words;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamPoint = (wins * 3) + (ties);
  return teamPoint;
}

// Desafio 6
function highestCount(numbers) {
  let higher = Math.max.apply(null, numbers);
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higher) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNum.length; index++) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNum[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (arrayNum[index] % 3 !== 0 && arrayNum[index] % 5 !== 0) {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
