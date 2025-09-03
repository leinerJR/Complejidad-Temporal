//o(1)
function obtenerPrimerElemento(lista) {
  // Siempre accede al primer elemento sin importar el tamaño de la lista
  return lista[0];
}

let numeros = [10, 20, 30, 40];
console.log(obtenerPrimerElemento(numeros)); // Salida: 10


//o(n)
function mostrarElementos(lista) {
  // Recorre toda la lista una vez
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

let nombres = ["Ana", "Luis", "Pedro", "María"];
mostrarElementos(nombres);


//o(n2)
function mostrarPares(lista) {
  // Doble bucle anidado: por cada elemento, recorre la lista completa
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      console.log(`(${lista[i]}, ${lista[j]})`);
    }
  }
}

let letras = ["A", "B", "C"];
mostrarPares(letras);

