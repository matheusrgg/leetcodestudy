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

```let filtro = "Ve"
let cores = ["Vermelho", "Verde", "Azul", "Amarelo"]
let coresFiltrado = cores.filter((cor)=>{
  if(cor.indexOf(filtro) !== -1){
    return cor
  }

})

``` console.log(coresFiltrado)

```
## The difference between Includes and InfexOf

includes:

Checks if a specified substring exists within a string (or an element exists in an array).
Returns a boolean (true or false).
Example: string.includes(substring) or array.includes(element).

indexOf:

Checks for the position (index) of a specified substring within a string (or element in an array).
Returns the index of the first occurrence (0 or greater) if found, or -1 if not found.
Example: string.indexOf(substring) or array.indexOf(element).
