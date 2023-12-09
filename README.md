# vite
Exercicio relacionado é um gerador de senha aleatoria com instalação de npm.
##Vou Mostrar os passos iniciais para instalação.

- npm init -y

Para iginorar o /node_module
- touch .gitignore
- echo "node_modules/" >> .gitignore

instalação do vite
- npm install vite

Adcionar o tipo no package.json para module
"""
package.json

{
  "name": "gerador-de-senhas",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "dev": "vite --open"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
     "nanoid": "^4.0.0",
     "vite": "^2.0.0"
   },
   "type": "module"    //<---- adicionar o tipo
 }
"""
npm install // para instalação do node_module

executando o script com:
#npm run dev

instalando o lint:
#npm init @eslint/config

-How would you like to use ESLint? - Use as setas de navegação do seu teclado até selecionar a opção To check syntax, find problems, and enforce code style e aperte a tecla ENTER para confirmar.

-What type of modules does your project use? - Selecione a opção JavaScript modules (import/export) para confirmar, para informar que utilizaremos ES Modules no projeto.

-Which framework does your project use? - Como ainda não estamos usando nenhum framework na nossa aplicação, selecione a opção None of these.

-Does your project use TypeScript? - Como utilizamos JavaScript em vez de TypeScript, selecione a opção No.

-Where does your code run? - Selecione opção Browser.

-How would you like to define a style for your project? - Como estamos configurando nosso próprio estilo, selecione a opção Answer questions about your style.

-What format do you want your config file to be in? - Selecione a opção JSON. Essa opção, ao término da execução, irá criar o arquivo de configuração .eslintrc.json, que mostraremos mais abaixo.

-What style of indentation do you use? - Selecione a opção Spaces.

-What quotes do you use for strings? - Selecione a opção Single, para indicar que utilizaremos aspas simples.

-What line endings do you use? - Selecione a opção Unix.

-Do you require semicolons? - Selecione a opção Yes, para indicar que utilizaremos ponto e vírgula ;.

-Would you like to install them now? Selecione a opção Yes, para instalar todas as dependências necessárias.

-Which package manager do you want to use? Selecione a opção npm.

// package.json
// ...
  "scripts": {
    "dev": "vite --open",
    "lint": "eslint ./src"
  },
