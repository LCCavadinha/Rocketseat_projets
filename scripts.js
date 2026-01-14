const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  
  // Removendo os caracteres com o padrão regex e através da função replace.
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});