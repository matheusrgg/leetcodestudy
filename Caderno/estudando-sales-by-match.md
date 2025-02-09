
# Começando Estudo

Pensando bem até ia colar o código que resolvi o exerícío aqui, más muito trabalhoso e volumoso se quiser conferir olho no VSCODE.

Aqui quero entender como resolvi a parte complexa do exercícío que era 
**Dentro de um array como vou identificar elementos pares e somar e ver se eles são divisíveis por dois**

````
let  counts  = {}; // Object to store counts

// Count occurrences of each number
for (let  num  of  repetidos) {
	counts[num] = (counts[num] ||  0) +  1;
}

let  totalPairs  =  0;

// Count pairs for each number
for (let  count  of  Object.values(counts)) {
	totalPairs  +=  Math.floor(count  /  2); // Divide by 2 and ignore remainder
}

return totalPairs 
````
Aqui acabei pegando a resposta do Chatgpt supond, porém eu que arrumei a array.
Só que não entendi direito o que aconteceu aqui
````
counts[num] = (counts[num] ||  0) +  1;
``````
tipo ele pega o counts um objeto vázio e joga o [num] na frente que **pourra**

### Hmmm respostta boazinha ein

Pelo que entendi esse counts[num] é pra conferir se tem o número
Uma alternativa
````
if (counts[num] === undefined) { counts[num] = 1; // First occurrence } 
else { counts[num]++; // Increment count }
````

counts num é pra pra conferir se tem o número

Conversa com o Chat:
[(https://chatgpt.com/share/679d425c-6260-8010-969e-cb3ba219108e)]

### Beleza meio que entendi essa primeira parte /bora pra segunda

and here where it ignores ? "// Count pairs for each number for (let count of Object.values(counts)) { totalPairs += Math.floor(count / 2); // Divide by 2 and ignore remainder }"

````
### **What does `Math.floor()` do?**

-   `Math.floor(x)` **rounds down** `x` to the nearest whole number, ignoring any decimal places.
````````

### Bora pra resposta do Youtube

https://www.youtube.com/watch?v=STnAit_uQhI 

Acho que estou vendo a solução em java
más vai usar **hash table** 

Ja vi algo parecido em algum outro exemplo
