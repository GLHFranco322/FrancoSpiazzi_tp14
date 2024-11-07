const array = ["coca-cola", "sprite", "fanta", "manaos", "goliat", "pritty"];
// A
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// B
let i1 = array.shift();
// 
array.push(i1);
// 
console.log(array);
// C
array.push("mirinda","saca corchos");
// 
console.log(array);
// D
console.log(`La cantidad de elementos es ${array.length}`);
// E
// let buscarElemento = "manaos";
let buscarElemento = "pepitos";

if(array.includes(buscarElemento)){
    console.log("Producto encontrado.");    
}
else{
    console.log("El producto buscado no existe.");
}
// F
let arraysUnif = array.join(' ');

console.log(arraysUnif);
// G
let cantidadCaracteres = arraysUnif.length;

console.log(`Hay ${cantidadCaracteres} cantidad de caracteres`);
// H
arraysUnif = arraysUnif.replace("sprite", "pepitos");
console.log(arraysUnif);
// I
let newArray = arraysUnif.split(', ')

console.log(newArray);
//