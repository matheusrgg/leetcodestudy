ok uma duvida antes de seguir, o has é um metodo do Map ou set

Ótima pergunta. Na verdade, os dois têm has().

Map

No Map, o has() verifica se uma chave existe.

const files = new Map();

files.set('/file1.txt', 10);

console.log(files.has('/file1.txt'));

Resultado:

true
Set

No Set, o has() verifica se um valor existe.

const names = new Set();

names.add('Matheus');

console.log(names.has('Matheus'));

Resultado:

true
Diferença visual
Map
const files = new Map();

files.set('/file1.txt', 10);
files.set('/file2.txt', 20);

Estrutura:

/file1.txt -> 10
/file2.txt -> 20

Busca:

files.has('/file1.txt');
Set
const files = new Set();

files.add('/file1.txt');
files.add('/file2.txt');

Estrutura:

/file1.txt
/file2.txt

Busca:

files.has('/file1.txt');
Regra rápida para entrevistas

Use Map quando você precisa armazenar:

chave -> valor

Exemplo:

arquivo -> tamanho
usuário -> capacidade
produto -> preço

Use Set quando você só quer saber se algo existe:

arquivo
usuário
email

sem valor associado.

No desafio da Nubank, você está fazendo:

"/file1.txt" -> 10
"/file2.txt" -> 20

Então Map é a escolha perfeita.

Aliás, uma das primeiras coisas que eu faria no addFile() do desafio seria usar justamente:

if (this.files.has(name)) {
    return false;
}

porque o requisito diz:

falhar se um arquivo com o mesmo nome já existir.

Você já tem conhecimento suficiente para implementar essa validação sozinho agora. 😄