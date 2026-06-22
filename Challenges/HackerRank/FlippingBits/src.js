//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript

unction solution(str) {



  const removeRepeatedNumbers = [];

  for(let i = 0; i < str.length ; i ++){
    if(!removeRepeatedNumbers.includes(str[i])){
      removeRepeatedNumbers.push(str[i])
    }
  }


  const getSecond = removeRepeatedNumbers.sort((a,b) => b-a )

  console.log(removeRepeatedNumbers)

  console.log(getSecond[1])
  return getSecond[1]
  
}

console.log(solution([2, 3, 6 ,6 ,5]));