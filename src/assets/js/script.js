const form = document.getElementById("item-form");
const input = document.getElementById("item-input");
const feedback = document.getElementById("feedback");
const list = document.getElementById("item-list");

const items = [
  { text: "Pão de forma", completed: false },
  { text: "Café preto", completed: false },
  { text: "Suco de laranja", completed: false },
  { text: "Bolacha", completed: false }
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Removendo espaços extras para evitar entradas "vazias"
  const value = input.value.trim();

  // Interrompe o fluxo se o valor for inválido
  if (value === "") {
    showError("Digite o nome do item antes de adicionar.");
    return;
  };

  items.push({ text: value, completed: false });
  renderList();

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

function renderList() {
  // Limpando a lista antes de renderizar para manter o DOM sincronizado com o estado
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;

    checkbox.addEventListener("change", () => {
      items[index].completed = checkbox.checked;
      renderList();
    });

    const span = document.createElement("span");
    span.textContent = item.text;

    if (item.completed) {
      span.style.textDecoration = "line-through";
    };
    
    const button = document.createElement("button");
    button.type = "button";
    
    const icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-trash-can");
    
    button.appendChild(icon);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
  });
};

renderList();



