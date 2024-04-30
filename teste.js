// = comentário uma linha - atalho: ctrl /

/* = início do comentário de várias linhas
 final do comentário de várais linhas = */

/*var y = 0;
var x = 1;

var z = 2;

//função do primeiro grau:
//ax + b = 0


function soma(a, b) {
    console.log(a+b);
    return a + b;
}

soma(3+5);

console.log("Hello world!");*/

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`)
        }
    }
    console.log('Os números pares são: ',evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);
