const form = document.getElementById("item-form");
const input = document.getElementById("item-input");
const feedback = document.getElementById("feedback");
const list = document.getElementById("item-list");
const empty = document.getElementById("empty-state");

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
    showMessage("Digite o nome do item antes de adicionar.");
    return;
  };

  items.push({ text: value, completed: false });
  renderList();

  input.value = "";
});

function showMessage(message) {
  feedback.textContent = message;
  feedback.classList.add("feedback-message");
  feedback.style.display = "block";

  // Remove a mensagem após alguns segundos para não bloquear o usuário
  setTimeout(() => {
    feedback.textContent = "";
    feedback.style.display = "none";
  }, 2000);
}

function createListItem(item, index) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.completed;

  // Atualiza o estado com base na interação do usuário
  checkbox.addEventListener("change", () => {
    items[index].completed = checkbox.checked;
    renderList();
  });

  const label = document.createElement("label");
  label.classList.add("checkbox");

  const checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");

  label.appendChild(checkbox);
  label.appendChild(checkmark);

  const span = document.createElement("span");
  span.textContent = item.text;

  if (item.completed) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("remove-item");
  button.title = `Apagar ${item.text}`;

  button.addEventListener("click", () => {
    // Captura o texto antes da remoção para exibir feedback ao usuário
    const removedItem = items[index].text;
    items.splice(index, 1);
    showMessage(`"${removedItem}" foi removido da lista.`);
    renderList();
  });

  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-trash-can");

  button.appendChild(icon);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(button);

  return li;
}

function renderList() {
  // Limpando a lista antes de renderizar para manter o DOM sincronizado com o estado
  list.innerHTML = "";

  if (items.length === 0) {
    empty.style.display = "block";
    return;
  };

  empty.style.display = "none";

  items.forEach((item, index) => {
    const li = createListItem(item, index);
    list.appendChild(li);
  });
};

renderList();



