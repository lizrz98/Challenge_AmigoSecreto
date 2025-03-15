// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let secretfriend = [];

function agregarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let name = amigoInput.value.trim();

  if (name === "") {
    alert("Por favor ingrese un name que sea válido.");
    return;
  }

  secretfriend.push(name);
  actualizarLista();
  amigoInput.value = "";
}

function actualizarLista() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";
  secretfriend.forEach((name) => {
    let li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function sortearAmigo() {
  if (secretfriend.length === 0) {
    alert("La lista está vacía, agrega al menos un nombre.");
    return;
  }
  let random = Math.floor(Math.random() * secretfriend.length);
  let win = secretfriend[random];
  let listResult = document.getElementById("resultado");
  listResult.innerHTML = "";
  let li = document.createElement("li");
  li.textContent = "El amigo secreto es: " + win;
  listResult.appendChild(li);
}
