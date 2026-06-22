//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript

function lonelyinteger(str) {

 
 for(let i=0 ; i < str.length ; i++){

  let count = 0

   for(let j=0 ; j < str.length ; j++){

      if(str[i] === str[j]){
        count++
      }

     
 }
 if(count === 1){
        return str[i]
      }
}


  
}

console.log(lonelyinteger([1, 2, 3 ,4 ,3,2,1]));