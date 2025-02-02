function displayUserData() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  document.getElementById("userName").textContent = storedUser.name;
  document.getElementById("name").textContent = storedUser.name;
  document.getElementById("email").textContent = storedUser.email;
  document.getElementById("number").textContent = storedUser.number;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "../login/login.html";
}

window.onload = function () {
  displayUserData();
};
