//EJERCICIO 2 DEBER  29 /ENERO /2024
const inicio = [ "unacadena",3,9,1,10,500,1,10,true]
let nums = []
 for (let i =0; i < inicio.length; i ++) {
   if (typeof inicio [i] == 'number') {
           nums.push(inicio[i])

   }
   for (let i = 1; i < nums.length; i++) {
    let nuevo = nums[i];
    let j = i - 1;
    while (j>= 0 && nums[j] < nuevo){
        nums [ j + 1] = nums [j];
        j--; 
    }
    nums [j + 1] = nuevo;
   }
 }
console.log("Numeros Ordenados", nums)