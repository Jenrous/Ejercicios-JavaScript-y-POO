// ejrcicio 1 DEBER 29 /ENERO/2024
function numeroDeElementos (num) {
    let a = 0;
    let b = 1;
    let aumento = [a, b];
    for (let i = 2; i<num; i++) {
        let c = a+b;
        aumento.push(c);
        a= b;
        b= c;
    }
    return aumento;
}
console.log ('Resultado', numeroDeElementos(4))