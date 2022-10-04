/* eslint-disable sonarjs/cognitive-complexity */
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
  const words = period.split(' ');
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
  for (let index = 0; index < arrayNum.length; index += 1) {
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
function encode(letters) {
  let code = '';
  for (let index = 0; index < letters.length; index += 1) {
    if (letters[index] === 'a') {
      code += '1';
    } else if (letters[index] === 'e') {
      code += '2';
    } else if (letters[index] === 'i') {
      code += '3';
    } else if (letters[index] === 'o') {
      code += '4';
    } else if (letters[index] === 'u') {
      code += '5';
    } else {
      code += letters[index];
    }
  }
  return code;
}
function decode(text) {
  let decoder = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      decoder += 'a';
    } else if (text[index] === '2') {
      decoder += 'e';
    } else if (text[index] === '3') {
      decoder += 'i';
    } else if (text[index] === '4') {
      decoder += 'o';
    } else if (text[index] === '5') {
      decoder += 'u';
    } else {
      decoder += text[index];
    }
  }
  return decoder;
}

// Desafio 10
function techList(tech, namePerson) {
  let objectArray = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    let objectList = {
      name: namePerson,
      tech: tech[index],
    };
    objectArray.push(objectList);
  }
  objectArray.sort(function(a, b) {
    if(a.name < b.name) {
      return false;
    } else {
      return true;
    }
  }
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
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
