// Usuário e senha corretos
const USERNAME = "Xploud";
const PASSWORD = "146270";

// Verificar login
document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USERNAME && password === PASSWORD) {
    localStorage.setItem("loggedIn", "true");  // Armazena o estado de login
    window.location.href = "index.html";  // Redireciona para o catálogo
  } else {
    document.getElementById("error-msg").style.display = "block";  // Exibe mensagem de erro
  }
});

// Checar se o usuário já está logado
window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "index.html";  // Se já estiver logado, redireciona diretamente
  }
};
