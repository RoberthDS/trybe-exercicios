let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorN = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (menorN > numbers[i]) {
        menorN = numbers[i];
    }
}
console.log(menorN);