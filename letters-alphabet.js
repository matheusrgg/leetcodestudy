const frase = "We promptly judged antique ivory buckles for the next prize";
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function limparFrase(frase) {
    const splitAll = frase.split(" ").join("");
    const splitAlToArray = splitAll.toLowerCase().split(""); // Transformar tudo para minúsculo
    const splitAlToArrayRemoveDuplicates = splitAlToArray.filter((value, index, array) => {
        return array.indexOf(value) == index;
    });

    return splitAlToArrayRemoveDuplicates;
}

function pangrams(s) {
    const fraselimpa = limparFrase(s);

    for (let letraAlfabeto of alfabeto) {
        if (!fraselimpa.includes(letraAlfabeto)) {
            return "Não Inclui";
        }
    }

    return "Inclui";
}

console.log(pangrams(frase));

