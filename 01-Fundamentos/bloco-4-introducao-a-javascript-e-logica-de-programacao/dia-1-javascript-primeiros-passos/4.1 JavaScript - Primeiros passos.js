// Atividade 1
const a = 40;
const b = 50;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// Atividade 2
const c = 37;
const d = 61;

if (c > d) {
  console.log(c);
}
else {
  console.log(d);
}

// Aatividade 3
const e = 41;
const f = 39;
const g = 45;

if (e > f && e > g) {
  console.log(e);
}
else if (f > g && f > g) {
  console.log(f);
}
else {
  console.log(g);
}

//Atividade 4
const num1 = 0;

if (num1 > 0) {
  console.log("positive");
} 
else if (num1 < 0) {
  console.log("negative");
}
else {
  console.log("zero")
}

// Atividade 5
const l1 = 6
const l2 = 6
const l3 = -6

if (l1 + l2 + l3 === 180) {
  console.log(true);
}
else if (l1 || l2 || l3 < 0) {
  console.log("ERROR");
}
else {
  console.log(false)
}