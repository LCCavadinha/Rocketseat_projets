// Cotação de moeadas do dia
const USD = 5.39;
const EUR = 6.26;
const GBP = 7.21;
// Sempre que formos usar váriaveis como parâmetro, por boa prática usar a variável em caixa alta

// Obtendo elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  
  // Removendo os caracteres com o padrão regex e através da função replace.
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// caputurando o envento de submit do formulário
form.onsubmit = (e) => {
  e.preventDefault();

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para conversão da moeda
function convertCurrency(amount, price, symbol){
  try{
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calculando o total
    let total = amount * price

    // Formatando o valor total
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado total
    result.textContent = `${total} Reais`;

    // APlica a classe que exibe o footer
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer, removendo ele da tela
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde");
  };
};

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR" , {
    style: "currency",
    currency: "BRL",
  });
};