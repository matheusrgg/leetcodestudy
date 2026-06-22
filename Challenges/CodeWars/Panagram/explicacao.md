Vamos passo a passo com "abcdefg".

Iteração 1
let i = 0;

let pair = str.slice(0, 2);

O slice(inicio, fim) pega os caracteres da posição inicio até antes da posição fim.

Visualmente:

abcdefg
0123456

Então:

str.slice(0, 2)

pega:

ab

Logo:

pair = "ab"
Iteração 2

Como você fez:

i += 2

o i passa a valer:

i = 2

Então:

str.slice(2, 4)

Visualmente:

abcdefg
0123456
  ^^

Resultado:

cd
Iteração 3
i = 4

str.slice(4, 6)

Resultado:

ef
Iteração 4
i = 6

str.slice(6, 8)

Resultado:

g

porque só existe o caractere na posição 6.

O loop completo
for (let i = 0; i < str.length; i += 2) {
  let pair = str.slice(i, i + 2);
  console.log(pair);
}

Saída:

ab
cd
ef
g
Por que usamos i + 2?

Porque queremos pegar 2 caracteres por vez.

Se fosse:

str.slice(i, i + 3)

teríamos:

abc
def
g

Se fosse:

str.slice(i, i + 4)

teríamos:

abcd
efg
Dica para visualizar

Adicione este console.log:

for (let i = 0; i < str.length; i += 2) {
  let pair = str.slice(i, i + 2);

  console.log(
    `i=${i} | slice(${i}, ${i + 2}) => ${pair}`
  );
}

Saída:

i=0 | slice(0, 2) => ab
i=2 | slice(2, 4) => cd
i=4 | slice(4, 6) => ef
i=6 | slice(6, 8) => g

Esse tipo de loop aparece muito em CodeSignal e Codewars quando você precisa processar strings em blocos (2 em 2, 3 em 3, etc.).