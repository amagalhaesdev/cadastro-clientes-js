const lista = document.getElementById("listaClientes");

// URL base da sua API (troque pela sua se mudar)
const API_URL =
  "https://6a471db3abfcbaade117fa61.mockapi.io/api/clientes";

// Função para criar um item de cliente na lista
function adicionarClienteNaLista(cliente, id) {
  const item = document.createElement("li");

  item.innerHTML = `
    <span class="nome">${cliente.nome}</span>
    <span class="email">${cliente.email}</span>
    <button>X</button>
  `;

  // Remover cliente (requisição DELETE)
  item.querySelector("button").addEventListener("click", () => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => item.remove())
      .catch((erro) => console.error("Erro ao excluir cliente:", erro));
  });

  lista.appendChild(item);
}

// Carrega os clientes existentes ao iniciar a página (GET)
fetch(API_URL)
  .then((resposta) => resposta.json())
  .then((clientes) => {
    clientes.forEach((cliente) => {
      adicionarClienteNaLista(cliente, cliente._id);
    });
  })
  .catch((erro) => {
    console.error("Erro ao buscar clientes:", erro);
  });

// Evento de cadastro de novo cliente (POST)
document.getElementById("add").addEventListener("click", () => {
  const nome = document.getElementById("cliente").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Preencha o nome e o e-mail.");
    return;
  }

  const novoCliente = { nome, email };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoCliente),
  })
    .then((resposta) => resposta.json())
    .then((clienteCriado) => {
      adicionarClienteNaLista(clienteCriado, clienteCriado._id);
      // Limpa os campos
      document.getElementById("cliente").value = "";
      document.getElementById("email").value = "";
      document.getElementById("cliente").focus();
    })
    .catch((erro) => {
      console.error("Erro ao cadastrar cliente:", erro);
    });
});
