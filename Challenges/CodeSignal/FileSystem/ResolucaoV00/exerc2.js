const files = new Map();

files.set('/file1.txt', 10);
files.set('/file2.txt', 20);
files.set('/andFile2.txt', 40);



//Então muitas vezes fazemos:
//const filesArray = Array.from(this.files);
//para transformar o Map em Array e depois trabalhar com ele.

//console.log("Console.log array from files",Array.from(files));

const numbers = [5, 20, 9];
numbers.sort();
//console.log(numbers);

//resposta [20,5,9]
//pq? converte tudo pra sstring e alfabeticamente 2 vem antes de 5

//agora aprendendo sort
const numbers2 = [5, 20, 9];

numbers2.sort((a, b) => a - b);

//console.log(numbers2);

//sort Video https://www.youtube.com/watch?v=RsFBsBep-hA

//No Nubank o nome do exercicio é getNLargest()
function getFilesSortedBySizeAndDescendingOrder(files){
    //console.log("files, ", files)
    //como transformo isso em Array
    //pow que saco eu tinha aprendido como faz isso
    const filesArray = Array.from(files)
    return filesArray.sort(function(a, b){
        //se os numeros forem igual
        if(a[1] === b[1]){
            //decidir pela ordem alfabetics
            return a[0].localeCompare(b[0])
        }
        return b[1] - a[1]
    })
}


 function getNLargest(prefix, n) {

  //  - should return the list of strings representing the names of the top `n` largest files with names starting with `prefix` in the following format:
 //["<name>(<size>)", "<name>(<size>)", ...]

 const matchingFiles = [];





}

console.log(getFilesSortedBySizeAndDescendingOrder(files));

console.log("banana".localeCompare("apple"));
console.log("apple".localeCompare("banana"));
console.log("apple".localeCompare("apple"));


//-----

//transforma em Array
//sort
//confere se são iguais se sim compare por Nome 
//se nao
//comparar por tamanho do numero e traz em ordem descendente
//depois formata com a sintaxe correta