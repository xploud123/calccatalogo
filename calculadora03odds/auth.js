// auth.js

// Verificar se o usuário está logado
window.onload = () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Você precisa fazer login para acessar essa página.");
    window.location.href = "login.html"; // Redireciona para a página de login se não estiver logado
  }
};
