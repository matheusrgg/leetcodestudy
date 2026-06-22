//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript

function minMaxSum(s) {

  let sumA=0
  let sumB=0


  let total =0
  let biggest = Math.max(...s)
  let smalles= Math.min(...s)

  for(let i =0; i <s.length; i++){
    console.log(s);
    total += s[i]
  }

  sumA = total-smalles
  sumB=  total-biggest

  

  //antes preciso fazer as somas
  //no final pego o maior e o maior
  console.log(sumA);
  console.log(sumB);
}

console.log(minMaxSum([1 ,2 ,3 ,4 ,5]));