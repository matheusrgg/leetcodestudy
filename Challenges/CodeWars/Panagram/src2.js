//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
  //...

 
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

for( let i = 0; i < alphabet.length ; i++){

    if(!string.toLowerCase().includes(alphabet[i])){
        return false
    }
}


return true

}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));