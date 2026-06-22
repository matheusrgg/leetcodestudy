//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
  //...



  let areEqual = true
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

for(let i = 0; i < alphabet.length ; i++){

    if(!string.toLowerCase().includes(alphabet[i])){
      return false
    }



}

return true
  //colocar todas as letras do alfabeto
  //fazer um loop e ver se todas as letras da frase estão no alfabeto




}

isPangram('The quick brown fox jumps over the lazy dog.')
 //tester("The quick brown fox jumps over the lazy dog.", true);
  //      tester("This is not a pangram.", false);