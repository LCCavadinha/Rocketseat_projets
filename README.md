# Quicklist

Aplicação de lista de compras desenvolvida em JavaScript puro, com foco em controle de estado, renderização previsível e experiência do usuário sob falhas.

## Objetivo

Este projeto tem como objetivo praticar fundamentos essenciais de front-end sem o uso de frameworks, simulando manualmente conceitos comuns em bibliotecas como React, tais como:

- estado como fonte da verdade
- renderização baseada em estado
- fluxo unidirecional de dados
- separação entre lógica e interface

## Funcionalidades

- Lista inicial com itens pré-carregados
- Adição de novos itens com validação de entrada
- Marcação e desmarcação de itens como concluídos
- Remoção de itens da lista
- Feedback visual para ações do usuário
- Tratamento explícito de estado vazio

## Estado da aplicação

O estado da aplicação é representado por um array de objetos em memória:

```js
const items = [
  { text: "Pão de forma", completed: false }
];
```

## Estrutura da Interface

A aplicação utiliza HTML semântico para organizar os elementos da interface e permitir manipulação direta via JavaScript.

Elementos principais da estrutura:

- `header` — área de identificação da aplicação
- `main` — container principal da interface
- `form` — entrada de novos itens
- `section` — área que contém a lista de itens
- `ul` — lista dinâmica de itens
- `#feedback` — área de mensagens de feedback ao usuário
- `#empty-state` — mensagem exibida quando não existem itens na lista

## Estrutura de Estilização (CSS)

A aplicação utiliza CSS puro organizado por seções, com uso de variáveis para manter consistência visual e facilitar manutenção.

Principais conceitos utilizados:

- `:root` — definição de variáveis globais de cores e tipografia
- `reset` — normalização básica de margens, padding e box-sizing
- `flexbox` — organização do layout principal e alinhamento de elementos
- `mobile-first` — estrutura responsiva iniciando pelo layout mobile
- `scroll interno` — rolagem aplicada apenas na lista de itens
- `custom checkbox` — estilização manual do checkbox substituindo o padrão do navegador

Elementos principais da estilização:

- `body` — define cores base, tipografia e comportamento do layout
- `main` — container principal com layout flexível em coluna
- `.shopping` — organização do cabeçalho da lista
- `form` — estrutura do campo de entrada e botão de ação
- `.add-item` — botão principal de adicionar item
- `.remove-item` — botão de remoção de itens da lista
- `#item-list` — lista de itens com rolagem vertical
- `.checkbox` — estrutura do checkbox customizado
- `.checkmark` — elemento visual do checkbox
- `#empty-state` — mensagem exibida quando a lista está vazia
- `.feedback-message` — estilo visual das mensagens de feedback ao usuário

A estilização também utiliza:

- variáveis CSS para cores e tipografia
- flexbox para layout previsível
- media queries para adaptação em telas maiores
