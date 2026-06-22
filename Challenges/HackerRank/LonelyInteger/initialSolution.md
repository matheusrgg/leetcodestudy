//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript

function lonelyinteger(str) {


 let duplicates = []
 let notDuplicate  = 0

   //estou percorrendo a str principal de numero por numero
 for(let i=0 ; i < str.length ; i++){

  let count = 0

   for(let j=0 ; j < str.length ; j++){

      if(str[i] === str[j]){
        count++
      }

        console.log("primeiro lpp",duplicates)
    //se esse número já existe dentro da caixa, adiciona ele de novo    
    if(duplicates.includes(str[i])){
        console.log("dentro do primerio if", str[i])
        duplicates.push(str[i])

    //se não adiciona ele na caixa de numeros nao repetidos
    }else{
          console.log("dentro do segundo if", str[i])
 
 console.log("duplicates", duplicates)
 console.log("notDuplicate", notDuplicate)
       notDuplicate = str[i]
    }

 }


 console.log("duplicates -------", duplicates)
 console.log("notDuplicate", notDuplicate)
 return duplicates

  
}

console.log(lonelyinteger([1, 2, 3 ,4 ,3,2,1]));