
let frutas = [
    { nombre: "banana", citrico: false },
    { nombre: "mango", citrico: false },
    { nombre: "limon", citrico: true },
    { nombre: "fresa", citrico: false },
    { nombre: "naranja", citrico: true },
    { nombre: "mandarina", citrico: true },
  ];
  let citricos = [];
  let noCitricos = [];
  
  frutas.forEach((fruta) => {
    if (fruta.citrico == false) {
      noCitricos.push(fruta.nombre);
    } else {
      citricos.push(fruta.nombre);
    }
  });
  
  console.table(frutas);
  console.table(citricos);
  console.table(noCitricos);