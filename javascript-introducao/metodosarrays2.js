let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
var maiores = [34, 22, 46, 29, 44, 43, 39];
let numerosFiltrados = maiores.filter(function(valor){
    return valor >18
})
console.log (numerosFiltrados)