# cadastro-clientes-js

Uma aplicacao web simples e funcional desenvolvida para gerenciar o cadastro de clientes. O projeto realiza operacoes completas de CRUD (Criar, Ler e Deletar) consumindo dados de uma API Mock externa de forma assincrona.

Este repositorio serve como registro de estudo sobre manipulacao do DOM, programacao assincrona no navegador e integracao com servicos de API REST.

---

## Funcionalidades

- Listagem de Clientes (GET): Busca automaticamente os registros armazenados na API assim que a pagina e carregada, renderizando a lista dinamicamente.
- Cadastro de Clientes (POST): Envia o nome e o e-mail preenchidos no formulario para persistencia na API e atualiza a interface em tempo real.
- Remocao de Clientes (DELETE): Permite a exclusao individual de cada cliente diretamente pela interface, disparando a requisicao correspondente para o endpoint.
- Validacao Basica: Impede o envio do formulario caso os campos de nome ou e-mail estejam vazios.

---

## Tecnologias Utilizadas

- HTML5: Estrutura para os campos de entrada, botoes e container da listagem.
- JavaScript (ES6+): Utilizacao de funcoes nativas como Fetch API para requisicoes HTTP, Promises, arrow functions e escutadores de eventos (addEventListener).

---

## Exemplo

teste

---

## Como Executar o Projeto

Por se tratar de uma aplicacao estatica (client-side), voce nao precisa configurar banco de dados ou servidores back-end locais na sua maquina.

1. Clone o repositorio:
   ```bash
   git clone https://github.com/amagalhaesdev/cadastro-clientes-js.git
