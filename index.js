// Redirecionar para a calculadora correspondente
function redirecionar(calculadora) {
  window.location.href = `${calculadora}/index.html`;  // Redireciona para a página da calculadora
}

// Verificar se o usuário está logado
window.onload = () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";  // Se não estiver logado, redireciona para a página de login
  }
};
