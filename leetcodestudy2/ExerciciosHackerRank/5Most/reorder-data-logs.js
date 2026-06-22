




function getBodyAfterIdentifier(string){
    return string.slice(string.indexOf(' ') + 1);
}

function checkIfIsNumber(character){
    return /\d/.test(character);
}

//acho que isso é pra comparar e sort
//if body same then compare identifier
//como eu imaginei aqui que rola mesmo o sort do alfabeto
function comapare(a,b){
    const n = getBodyAfterIdentifier(a).localeCompare(getBodyAfterIdentifier(b));
    if( n !== 0){
        return n;
    }else{
        return a.localeCompare(b)
    }
}

function main(logs){
    //fiz isso
    const digitsLogs = [];
    const letterLogs = [];

    //vou loopas todos os logs
    //fiz isso
    for (const log of logs){
        if(checkIfIsNumber(getBodyAfterIdentifier(log))){
            digitsLogs.push(log)
        }else{
            letterLogs.push(log)
        }
    }

    //beleza isso tá funcionando
    console.log("deixa eu conferir os arraysDigit", digitsLogs)
    console.log("deixa conferir o letter", letterLogs)
    
    //aqui que acho que ta rolando a mágica mesmo
    // return [...letterLogs.sort(comapare), ...digitsLogs]
    return [...letterLogs, ...digitsLogs]

}
const logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
console.log(main(logs))

// console.log("test solution")

