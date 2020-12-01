/*1. [BigThreeReloaded] Confeccionar una función a la cual le envíe tres enteros y
retorne el mayor de ellos.
 */
let a = 0;
let b = 0;
let c = 0;

 const enteros = (a=a,b=b,c=c) =>{
     A = parseInt(a);
     B = parseInt(b);
     C = parseInt(c);
     if(A > B && A > C ){
        console.log(`es mayor es: ${A}`) ;
     }else if(C > B && C > A ){
        console.log(`es mayor es: ${C}`) ;
    }else if(B > A && B > C ){
        console.log(`es mayor es: ${B}`) ;
    }else{
        console.log('error');
    }
 }

 /*2 [AVGReloaded] Elaborar una función que reciba tres enteros y retorne el promedio.*/

 const promedio = (a=a,b=b,c=c) =>{
     A = parseInt(a);
     B = parseInt(b);
     C = parseInt(c);
     let tot = (A+B+C)/3;
     console.log(`el promedio es: ${tot}`);
 }

 /*3 [Plusx5] Confeccionar una función que solicite la carga de 5 valores por teclado y
retorne su suma.*/

const suma = () =>{
    let A = parseInt(prompt('ingrese un numero: '));
    let B = parseInt(prompt('ingrese otro numero: '));
    let C = parseInt(prompt('ingrese otro numero: '));
    let D = parseInt(prompt('ingrese otro numero:'));
    let E = parseInt(prompt('ingrese el ultimo numero: '));
    let suma = A + B + C + D + E;
    document.write(`la suma de todos los numeros es: ${suma}`);
}

 /*4. [newArray] Crear una función que reciba dos arrays (arreglos) como
argumentos y retorne el resultado en un nuevo arreglo
Ejemplo:
[1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]*/


function pegarArrays (array1, array2){
        const array3 = array1.concat(array2);
        console.log(array3);
};

/*5. [SiPeroNo] Crear una función que reciba dos arrays de números y retorne un nuevo
array con los elementos que se encuentren en el primer array, pero no en el
segundo 
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
[5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

const restaConj = (array1, array2) =>{
    const array3 = [];
            for(let i=0; i<array1.length;i++){
                if(!array3.includes(array1[i])){
                    array3.push(array1[i]);
                }if(!array3.includes(array2[i])){
                    array3.push(array2[i]);
                }
            }
        console.log(array3);
};

/*6. [Filter] Crear una función que reciba un array de números como argumento y
retorne un array con los elementos distintos
Ejemplo:
[1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0] */

const nArray = (vector) => {
    const newArray = [];
    for(let i=0 ; i<vector.length;i++){
        if(!newArray.includes(vector[i])){
            newArray.push(vector[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

/*7 [NoLength] Crear una función que retorne la cantidad de caracteres de un texto.
a. Nota: Esto es posible hacerlo dentro de javascript con .length. Implementar
un ciclo para resolver el problema.
 */

const largo = (cadena) =>{
    let cont = 0;
    const nCadena = [];
    for(let i=0; i<cadena.length; i++){
        nCadena.push(cadena[i]);
        cont++;
    }
    console.log(cont);
    console.log(nCadena);
}

/*8. [WalterWhite] Crear una función que retorne la cantidad de espacios en blanco de
un texto */ 

const blanco = (cadena) =>{
    let cont = 0;
    const nCadena = [];
    for(let i=0; i<cadena.length; i++){
        nCadena.push(cadena[i]);
        if(nCadena[i]===" "){
            cont++;
        }
    }
    console.log(cont);
    return cont;
}

/*9. [Capitalize] Crear una función que convierta un string “hola mundo” y retorne “Hola
Mundo”. */

const Mayus = (Cadena) =>{
    const newCadena = Cadena.split(' ');
    console.log(newCadena.length);
    for(let i=0; i<newCadena.length; i++){
        newCadena[i] = newCadena[i][0].toUpperCase() + newCadena[i].substr(1);   
    }
    console.log(newCadena.join(' '));
}

/*10. [toArray] Crear una función que reciba un string y lo convierta en un array de
caracteres. */

const str = (cadena) =>{
    const newCadena = [];
    for(let i=0; i<cadena.length; i++){
        newCadena.push(cadena[i]);
    }
    console.log(newCadena);
}

/*11. [AlCesarLoQueEsDelCesar] Implementar una función que pueda aplicar el cifrado
del césar. (Googlear) */

const cesar = (string1) =>{

    var abcd= '';
    for(let i=0; i<string1.length; i++){
        var hola= string1[i].charCodeAt();

        if((hola>=65 && hola<=87)||(hola>=97 && hola <=119)){
            abcd += String.fromCharCode(hola + 3);

            } else if(hola>=88 || hola>=120){
                abcd += String.fromCharCode(hola - 23);
        }
    }
    console.log(abcd);
}