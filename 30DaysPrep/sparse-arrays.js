//https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
//https://www.youtube.com/watch?v=BZdnvTBO4vI
//https://www.youtube.com/watch?v=n9w7Nuy-FmA 


//HashMap Solution


function matchingStrings(strings, queries) {

    const memory = {};
    for(const string of strings){
        memory[string] = (memory[string] || 0 ) + 1;
    }

    console.log("what", memory);
    const arraySum = queries.map((query)=>{
      return  memory[query] || 0
    })

    console.log(arraySum);
    return arraySum
}   



strings = ['aba', 'baba', 'aba', 'xzxb']
queries = ['aba', 'xzxb', 'ab']
matchingStrings(strings, queries)



//minha tentativa


// function matchingStrings(strings, queries) {
//     // Write your code here
//     let searchWord1 = 0
//     let searchWord2 = 0
//     let searchWord3 = 0

//     for( string of strings){

//         if(queries[0].includes(string)){
//             searchWord1 += 1
//         }else if(queries[1].includes(string)){
//             searchWord2 += 1
//         }else{
//             searchWord3 +=1
//         }
//     }

//     console.log(searchWord1, searchWord2, searchWord3);
// }

