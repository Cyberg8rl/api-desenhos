# Universo de Desenhos — catálogo interativo

Aplicação front-end que consulta a API pública de Rick and Morty e apresenta personagens em cards. Ao selecionar um card, a interface abre uma janela modal com informações adicionais do personagem.

## Funcionalidades implementadas

- Consulta de personagens pela API pública.
- Criação dinâmica de cards com imagem, nome e status.
- Exibição de espécie, gênero e origem em uma janela modal.
- Fechamento do modal pelo botão ou ao clicar fora da janela.
- Mensagem de erro na interface quando a consulta falha.

## Tecnologias

- HTML5
- CSS3
- JavaScript assíncrono (`fetch` e `async/await`)
- API pública Rick and Morty

## Estrutura

- `api-desenhos/index.html`: estrutura da página e do modal.
- `api-desenhos/css/style.css`: apresentação visual.
- `api-desenhos/js/script.js`: consulta à API, criação dos cards e interações.

## Como executar

Abra `api-desenhos/index.html` em um navegador com conexão à internet. A aplicação depende da disponibilidade da API pública para carregar os personagens.

## Tratamento de falhas

A requisição verifica se a resposta HTTP foi bem-sucedida e exibe uma mensagem na página caso não seja possível carregar os dados. O projeto usa dados externos; portanto, a disponibilidade e o conteúdo dependem da API.

## Escopo

Projeto front-end de estudo sobre consumo de APIs, manipulação do DOM e tratamento básico de erros. Não possui backend próprio.
