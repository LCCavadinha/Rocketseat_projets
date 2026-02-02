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
