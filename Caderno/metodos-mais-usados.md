## 1. Filter

Tem 3x parâmetros e um exemplo de como remover duplicatas, usando junto com IndexOf

  const splitAlToArrayRemoveDuplicates = splitAlToArray.filter((value, index, array) => {
        return array.indexOf(value) == index;
    });


## 2. includes 

usa bastante pra conferir se tem uma string
dentro de um array, más esse array tem que estar
loopado

### Foi esse que surgiu dúvida na prova da aws
qque não carregou, não lembro


## 3. IndexOf

Entendi que ele Encontra algo dentro da array e retonra a posição, más como vou usar a posição para comparar?