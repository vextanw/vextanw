function isLoggedIn() {
  return localStorage.getItem("logged") === "true";
}

function getUser() {
  return localStorage.getItem("user");
}

function logout() {
  localStorage.removeItem("logged");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
