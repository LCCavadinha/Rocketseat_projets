# 💱 Project Convert – Conversor de Moedas

Aplicação web desenvolvida com HTML, CSS e JavaScript puro para conversão de moedas estrangeiras em Real Brasileiro (BRL).

Projeto focado em manipulação de DOM, validação de entrada e formatação monetária.

---

## 🎯 Objetivo

Criar um conversor de moedas funcional aplicando:

- Manipulação de eventos
- Validação de input com Regex
- Controle de estado visual via classes CSS
- Formatação de moeda utilizando `toLocaleString`
- Tratamento de erro com `try/catch`

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Regex
- `toLocaleString()` para formatação monetária
- Manipulação de DOM
- Event Handling

---

## ⚙️ Funcionalidades

- Conversão de:
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)

- Validação do campo de valor:
  - Permite apenas números
  - Remove caracteres inválidos automaticamente

- Exibição dinâmica do resultado
- Atualização da cotação exibida
- Tratamento de erro com fallback visual

---

## 🧠 Estrutura da Lógica

### 1️⃣ Captura de Eventos

- `addEventListener("input")` para sanitização do input
- `onsubmit` para interceptar envio do formulário

### 2️⃣ Conversão

```js
convertCurrency(amount, price, symbol)
```

- Calcula valor total
- Atualiza descrição da cotação
- Aplica formatação BRL
- Controla exibição do footer

### 3️⃣ Formatação Monetária

```js
Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
```

## 📱 Responsividade

- Layout adaptável para telas menores
- Ajuste automático da largura do container
