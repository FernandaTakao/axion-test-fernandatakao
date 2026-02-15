# Axion Test

## Descrição do Projeto

Este sistema web é objeto de avaliação do processo seletivo da empresa Axion, para a vaga de estágio de desenvolvedor. Além do login, sua principal funcionalidade é a listagem de pessoas, lugares e comidas, cuja representação se faz por meio de imagens e labels. A estrutura do back-end foi fornecida pela empresa, enquanto o front-end coube à desenvolvedora construir.

## Funcionalidades 

- Autenticação de usuários
- Listagem de imagens nas categorias: people, foods e places
- Botão que permite ordenar as listas em ordem alfabética crescente ou decrescente

## Estrutura do Projeto
```
axion-test-fernanatakao
├─ axion-test-backend
└─ axion-test-frontend
```
## Tecnologias Utilizadas

* Front-End: Javascript, CSS Modules, React, Vite. 
* Back-End: Node.js, Strapi. 

## Preparo do Ambiente

Tenha o nvm instalado na sua máquina, pois o back-end e o front-end utilizam versões diferentes de node: 16 e 20. 

Clone este repositório:

```
git clone https://github.com/FernandaTakao/axion-test-fernandatakao.git
```

## Execução do Back-End

Entre no repositório *axion-test-backend*: 
```
cd axion-test-backend 
```
Certifique-se de que está com o node 16 instalado e em uso: 
```
nvm use 16 
```

Instale as dependências:
``` 
npm install 
```

Gere o build:
``` 
npm run build 
```

Execute a aplicação:
``` 
npm run develop 
```
Se bem-sucedido, você verá o link para redirecionamento à interface do Strapi. Para logar na plataforma, entre com as credenciais: 
```yaml
user: axioner@axion.company
senha: Axioner123
```

Pronto! 
Mantenha o terminal ativo e siga as instruções do front-end. 


## Execução do Front-End

Entre no repositório /axion-test-frontend:
```
cd axion-test-frontend
```
Certifique-se de que está com o node 20 instalado e em uso:
```
nvm use 20 
```
Instale as dependências:
``` 
npm install 
```
Execute a aplicação:
```
npm run dev 
```
Se bem-sucedido, você verá um link cujo destino é a interface web do sistema.

Para os testes, foi criado o usuário a seguir, cujas credenciais você deve inserir no formulário de login: 

```yaml
user: ventosoul1@gmail.com
password: ventosoul1 
```

Uma vez logado, você poderá navegar pelas listas. 


## Estrutura do Front-End
```
src
├─ assets
│  ├─ fonts
│  └─ imgs  // fornecido pela empresa
├─ components
├─ pages
├─ services
└─ styles  // css modules
```


## Possíveis Evoluções

Tornar o back-end compatível com a versão atual do node poderia favorecer a adição de novas funcionalidades. Centralizar o recebimento do token de login tornaria o código mais preciso; a tarefa não foi realizada, no entanto, em virtude de a API ter demandado análises para a compreensão de quais rotas estavam disponíveis e como funcionavam em termos de duração de token e nomenclatura de atributos json, por exemplo, haja vista que a rota de autenticação estava oculta. 
Além disso, a interface do login, cuja imagem de fundo atualmente mostra um computador sobre uma mesa, se beneficiaria de trocá-la para uma que representasse comidas, pessoas e lugares, as três categorias contempladas pelas listas. 
    
## Contato
```
takaofernanda4@gmail.com
```