1.-
let variableSinValor;

console.log(variableSinValor);   // undefined


2.-
let booleano1 = true;
let booleano2 = false;

console.log(booleano1, booleano2);   // true false


3.-
const PI = 3.14;

console.log(PI);   // 3.14


4.-
const TAU = 2 * PI;

console.log(TAU);   // 6.28


5.-
let booleanoAnd = booleano1 && booleano2;

console.log(booleanoAnd);   // false


6.-
let booleanoNot = !booleano1;

console.log(booleanoNot);   // false


7.-
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

console.log(booleanoMix0);   // false

--- OPERADORES ---

8.-
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

console.log(resultadoDesp);      // 2
console.log(incrementarDesp);    // 3


9.-
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

console.log(resultadoAntes);     // 3
console.log(incrementarAntes);   // 3


10.-
let contarHasta10_2 = 0;

for (; contarHasta10_2 !== 10; contarHasta10_2++) {
    // nothing
}

console.log(contarHasta10_2);   // 10


11.-
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI = postI + postJ++;
}

console.log(postI);   // 55
console.log(postJ);   // 11


12.-
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares = sumaPares + i;
    }
}

console.log(sumaPares);   // 20

13.-
let variableValorNumerico = 7;

console.log(variableValorNumerico);   // 7


14.-
const MiNombre = "Álvaro";

console.log(MiNombre);   // Álvaro


15.-
const MiNumeroFav = 9;

console.log(MiNumeroFav);   // 9


16.-
let booleanoOr = booleano1 || booleano2;

console.log(booleanoOr);   // true


17.-
let booleanoMix1 = (booleano1 && TAU / 2 === PI) || (variableValorNumerico >= MiNumeroFav);

console.log(booleanoMix1);   // true


18.-
let seisNoEsNueve = 6 !== 9;

console.log(seisNoEsNueve);   // true


19.-
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

console.log(booleanoMix2);   // true


20.-
let valorSuma = MiNumeroFav + variableValorNumerico;

console.log(valorSuma);   // 16


21.-
let valorResta = MiNumeroFav - variableValorNumerico;

console.log(valorResta);   // 2


22.-
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

console.log(valorMultiplicacion);   // 63


23.-
let valorDivision = MiNumeroFav / 3;

console.log(valorDivision);   // 3


24.-
let contarHasta10 = 0;

while (contarHasta10 !== 10) {
    contarHasta10++;
}

console.log(contarHasta10);   // 10


25.-
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ;
}

console.log(preI);   // 66
console.log(preJ);   // 11


26.-
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares = sumaImpares + i;
    }
}

console.log(sumaImpares);   // 25
