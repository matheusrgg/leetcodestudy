function solution(str) {



  const vowels = [ "a", "e", "i","o", "u"]

  let constantString = []
  let vowelString = []

  for( let i = 0 ; i < str.length ; i ++){

    console.log("i:", i);
    console.log("str[i]:", str[i]);
    
    if(vowels.includes(str[i])){
      vowelString.push(str[i])
    }else{
      constantString.push(str[i])
    }
  
  }

  //console.log("constant", constantString)
  //console.log("vowels", vowelString.concat(constantString))
  const vowelStrinConacted = vowelString.concat(constantString)
  for(let i = 0 ;  i < vowelStrinConacted.length ; i++ ){
    console.log(vowelStrinConacted[i])
  }
  
}

console.log(solution("javascriptloops"));