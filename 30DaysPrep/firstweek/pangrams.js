const frase = "We promptly judged antique ivory buckles for the next prize";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function limparFrase(frase){
    const splitAll = frase.split(" ").join("")
    const splitAlToArray = splitAll.toLowerCase().split("")
    const splitAlToArrayRemoveDuplicates = splitAlToArray.filter((value, index, array)=>{
        return array.indexOf(value) == index
    })

    return splitAlToArrayRemoveDuplicates
}





function pangrams(frase) {
    const fraseLimpa = limparFrase(frase)

    for(let letraAlfabeto of alfabeto){
        if(!fraseLimpa.includes(letraAlfabeto)){
            return "Não Inclui";
        }
    }

    return "Inclui";
}


pangrams(frase)