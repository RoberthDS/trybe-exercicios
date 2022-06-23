let array = [];

for (let i = 1; i < 26; i += 1) {
    array.push(i);
}
console.log(array);

// Atividade 9

let resultado = 0;

for (let i = 0; i < array.length; i += 1) {
    resultado = array[i] / 2;
    console.log(resultado);
}
