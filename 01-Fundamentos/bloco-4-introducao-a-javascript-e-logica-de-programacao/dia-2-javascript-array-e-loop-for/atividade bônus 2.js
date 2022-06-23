let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let idx = 0; idx < i; idx += 1) {
    if (numbers[i] > numbers[idx]) {
      let posicao = numbers[i];
      numbers[i] = numbers[idx];
      numbers[idx] = posicao;
    }
  }
} console.log(numbers);