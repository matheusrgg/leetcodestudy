function solution(str) {

  const splittedString = str.split("");
  
  const result = []

  for( let i = 0 ; i < splittedString.length ; i += 2){
    //if ficar uma letra sozinha no final adicionar _
    doubledCharacters.push(splittedString.slice(i, i+2))
  }
  return doubledCharacters;
}

console.log(solution("abcdefg"));