https://www.youtube.com/watch?v=qBSB5H7mCGo



Use forEach() quando:
Você quer percorrer todos os elementos de um array.
Não precisa interromper o loop no meio.
O código fica mais legível.
const nomes = ['Ana', 'João', 'Maria'];

nomes.forEach(function(nome) {
    console.log(nome);
});

✅ Mais limpo para operações simples.

Use for quando:
Precisa controlar o índice.
Precisa parar o loop com break.
Precisa pular iterações com continue.
Está resolvendo problemas de algoritm

Exemplo onde forEach NÃO funciona bem

Imagine que você quer encontrar a primeira letra que falta em um pangrama: