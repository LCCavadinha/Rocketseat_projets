// Cotação de moeadas do dia
const USD = 5.39;
const EUR = 6.26;
const GBP = 7.21;
// Sempre que formos usar váriaveis como parâmetro, por boa prática usar a variável em caixa alta

// Obtendo elementos do foemulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

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
    // APlica a classe que exibe o footer
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer, removendo ele da tela
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}