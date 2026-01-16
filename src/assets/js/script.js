const form = document.getElementById("item-form");
const input = document.getElementById("item-input");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Removendo espaços extras para evitar entradas "vazias"
  const value = input.value.trim();

  // Interrompe o fluxo se o valor for inválido
  if (value === "") {
    showError("Digite o nome do item antes de adicionar.");
    return;
  }

  console.log(value);
  input.value = "";
});

function showError(message) {
  feedback.textContent = message;
  feedback.style.display = "block";

  // Remove a mensagem após alguns segundos para não bloquear o usuário
  setTimeout(() => {
    feedback.textContent = "";
    feedback.style.display = "none";
  }, 2000);
};


