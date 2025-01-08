function matchingStrings(strings, queries) {
    // Write your code here
    let searchWord1 = 0
    let searchWord2 = 0
    let searchWord3 = 0

    for( string of strings){

        if(queries[0].includes(string)){
            searchWord1 += 1
        }else if(queries[1].includes(string)){
            searchWord2 += 1
        }else{
            searchWord3 +=1
        }
    }

    console.log(searchWord1, searchWord2, searchWord3);
}



strings = ['aba', 'baba', 'aba', 'xzxb']
queries = ['aba', 'xzxb', 'ab']
matchingStrings(strings, queries)


