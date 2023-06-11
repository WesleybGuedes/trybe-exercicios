function somaArray(arrai) {
  let sum = 0;
        
  for (let index = 0; index < arrai.length; index += 1) {
    sum += arrai[index];
  }

  return sum;
}

const meuArray = [1, 2, 3, 4, 5];
console.log(somaArray(meuArray));

