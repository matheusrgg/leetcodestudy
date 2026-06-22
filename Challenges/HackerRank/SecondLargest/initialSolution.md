function solution(str) {



  const removeRepeatedNumbers = [];

  for(let i = 0; i < str.length ; i ++){
    if(!removeRepeatedNumbers.includes(str[i])){
      removeRepeatedNumbers.push(str[i])
    }
  }


  let max = removeRepeatedNumbers[0];

  for(let i = 0; i < removeRepeatedNumbers.length ; i ++){

    //peguei o maior número // como faço pra pegar o segundo
    if(removeRepeatedNumbers[i] > max){
       max = removeRepeatedNumbers[i]
    }
   
  }

  const getSecond = removeRepeatedNumbers.sort((a,b) => b-a )

  console.log(removeRepeatedNumbers)

  console.log(getSecond[1])
  return getSecond[1]
  
}

console.log(solution([2, 3, 6 ,6 ,5]));