console.log("Funciona");


// function suggestedProducts(products, searchWord){

//     console.log("products", products, searchWord)

//     const searchWordLowerCase = searchWord.toLowerCase();

//     for( let i =0 ; i < products.length; i++){
//         var productsLowerCase =products[i].toLowerCase()
//         console.log("todos", productsLowerCase[i]);
//         if(productsLowerCase == searchWordLowerCase){
//              console.log("encontrei", productsLowerCase[i]);
//         }
//     }

    

// }


/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const result = []
    let prefix = '';
  
    for(char of searchWord){
      prefix += char
      let suggestion = []
  
      for(product of products){
        if(product.startsWith(prefix)){
          suggestion.push(product)
        }
      }
  
      result.push(suggestion.sort().slice(0,3))
    }
   
  
    return result
  }

const products = ["mobile","mouse","moneypot","monitor","mousepad"], 
searchWord = "mouse"

suggestedProducts(products, "mouse")