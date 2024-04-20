let i = 0;
let notas = [];
let suma = 0;

while (i < 5) {
  let nota = parseFloat(prompt("Ingresa una nota"));
  notas.push(nota);
  suma+=nota
  i++;
}

console.log("El promedio es de:", suma/i)