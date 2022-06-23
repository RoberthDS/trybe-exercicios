// Atividade 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
// Atividade 2
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
   soma += numbers[i];
}
  console.log("soma dos valores no array é: " + soma);

// Atividade 3
let media = 0;

media = soma / numbers.length;
  console.log(" a média dos valores da array é: " + media);

// Atividade 4
if (media > 20) {
  console.log("valor maior que vinte")
 } else {
  console.log("valor menor ou igual a 20");
 }

 