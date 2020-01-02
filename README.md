# Projeto Média das Notas dos Alunos

## Descrição:
Esta aplicação foi desenvolvida como atividade pessoal para exercitar os conhecimentos durante o estudo de JavaScript. É uma aplicação que tem como objetivo calcular a média das notas de uma série de alunos.
A aplicação teve como base, uma atividade proposta pelo professor Leonardo Meirelles eu seu site pessoal:

> [http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/](http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/)

Além de permitir exercitar a linguagem JavaScript, a construção do aplicativo permitiu, também, praticar HTML5 e CSS3.
É possível conferir a aplicação clicando no link a seguir:

> [https://rafaelmarchesin.github.io/media-notas/index.html](https://rafaelmarchesin.github.io/media-notas/index.html)

***

## Dados da Aplicação:
### Nome do aplicativo:
Média das notas dos alunos

### Objetivo do aplicativo:
Calcular a média das notas de alunos inseridas no sistema.

### Versão:
v.1.0

### Autor:
Rafael Marchesin

### Licença:
MIT License

***

## Documentação:
### Tela principal:

![Tela da aplicação com o fundo numa cor que varia entre o roxo escuro e o azul marinho, com a frase Média das Notas dos Alunos impressa em letras brancas no topo da imagem. Abaixo, um retângulo branco e de bordas arredondadas nos vértices recebe o conteúdo da aplicação. Um campo para inserção das notas dos alunos é seguido do botão Adicionar. Abixo é visível o espaço que receberá as notas inseridas. Mais abaixo, o botão Calcular Média é exibido em coloração acinzentada seguido pala frase A média é. Na sequência, é exibido um ícone de fundo azul e bordas pretas com a letra i gravada no cenro. No final da imagem, o nome Rafael Marchesin é exibido na frente do símbolo de direitos de cópia.](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/tela-principal.jpg)

### Inserindo dados:
Para que a média das notas dos alunos possa ser calculada, primeiro é preciso inserir as notas no sistema. Para isso, os valores devem ser inseridos no campo “Nota:” e depois deve-se clicar no botão Adicionar. 

![A imagem exibe a parte superior da aplicação com o campo Nota em destaque. O campo está preenchido com o valor 7,98 seguido pelo botão Adicionar representado por um retângulo de cor cinza claro. É possível ver a parte superior do campo que recebe as notas digitadas. É possível, ainda, ver o plano de fundo da aplicação em cor roxa preenchendo as extremidades da imagem.](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/insere-nota.jpg)

### Armazenamento das notas:
As notas serão registradas no campo logo abaixo do campo “Notas:” como é demonstrado na imagem abaixo.

![A imagem é predominada pela cor branca. Na parte superior, é possível ver o campo para intersão de notas indicado pela palavra Nota e um botão cinza com a palavra Adicionar. Abaixo, é eibido um campo que recebe as notas digitadas. Quatro linhas aparecem inseridas, a primeira diz A nota 1 foi 1 vírgula 98, a segunda linha diz A nota 2 foi 8 vírgula 5, a terceira linha diz A nota 3 foi 7 vírgula 6, a quarta linha diz A nota foi 9 vírgula 14. Abaixo é exibido um botão cinza com a frase Calcular Média.](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/armazena-notas.jpg)

Obs.: Não é possível remover valores já inseridos no sistema, caso algum dos valores tenha sido inserido errado, é necessário iniciar novamente a aplicação e inserir os valores mais uma vez.

### Cálculo da média das notas e exibição do resultado:
Para que a aplicação efetue o cálculo da média das notas, é preciso clicar no botão “Calcular Média”. O resultado aparecerá no campo logo abaixo do botão conforme exibido na imagem abaixo.

![Imagem de pequeno tamanho que exibe na parte superior um botão cinza com a frase Calcular Média, seguido da frase A média é 8 vírgula 30.](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/resultado-media.jpg)

### Valores aceitos pela aplicação e mensagens de erro:
Algumas situações podem fazer o aplicativo exibir uma mensagem de erro durante seu uso. São elas:
- Clicar no botão “Adicionar” sem que nenhum valor tenha sido inserido no campo “Nota:”. Exibe a mensagem “Por favor, insira uma nota”.
- Inserir um valor que não seja numérico. Exibe a mensagem “A nota digitada é inválida, por favor, insira uma nota válida.”
- As notas inseridas no sistema devem estar entre 0 e 10, aceitando-se valores reais marcados por ponto ou vírgula. Caso um valor diferente seja adicionado, exibe a mensagem “A nota digitada é inválida, por favor, insira uma nota válida.”
Atenção: É permitido inserir valores com número indeterminado de casas decimais, no entanto, o resultado da média será arredondado para que contenha apenas duas casas decimais.

Abaixo, é possível ver o exemplo da mensagem de erro que é exibida após o usuário clicar no botão “Adicionar” sem antes inserir um valor no campo “Nota”.

![A imagem exibe uma janela de navegadr com as frases Essa página diz e Por favor, insira uma nota. No canto inferior direito, é exibido um botão azul com a palavra OK. É possível ver parte do plano de fundo da aplicação em cor roxo escuro](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/mensagem-sem-valor-inserido.jpg)

### Ícone de informação:
Ao clicar no ícone indicado pela letra “i” na parte inferior da aplicação, um campo com informações do aplicativo é exibido ao usuário conforme demonstrado na imagem abaixo.

![A imagem exibe um quadrado branco de bordas arredondadas, o entorno do quadrado é preenchido pela cor roxa. Dentro do quadrado, é exibido um ícone azul de borda preca com a letra i no centro. Abaixo é exibida a mensagem Este é um programa realizado como exercício durante aprendizado de JavaScript. Todo o programa foi desenvolvido por mim. Abaixo da mensagem, no espaço fora da caixa está escrito em branco e seguido pelo símbolo de direitos de cópia Rafael Marchesin,](https://raw.githubusercontent.com/rafaelmarchesin/media-notas/master/documentacao/informacao.jpg)
