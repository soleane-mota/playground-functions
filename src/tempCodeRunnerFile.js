function techList(tech, name) {
  let objectArray = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    let objectList = {
      name: name,
      tech: tech[index],
    };
    objectArray.push(objectList);
  }
  objectArray.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));