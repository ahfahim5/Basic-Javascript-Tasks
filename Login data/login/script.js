// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();
  
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  
//     const storedUsers = JSON.parse(localStorage.getItem("userData") || "[]");
//     const user = storedUsers.find(
//       (userData) => userData.email === username && userData.password === password);
//     console.log("User data:", user);
//     const message = document.getElementById("message");
//     if (user) {
//       message.textContent = "Login Successful!";
//       message.style.color = "green";
//       window.location.href = ("../dashbord/dashbord.html");

//     } else {
//       message.textContent = "Login Failed!";
//       message.style.color = "red";
//     }
//   });


  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
        const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const storedUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    const user = storedUsers.find(
      (userData) => userData.email === username && userData.password === password);

    const message = document.getElementById("message");

    if (user) {
        // Simulate saving the user to a new JSON file (by alerting)
        const currentUser = localStorage.setItem("currentUser", JSON.stringify(user));
        message.textContent = "Login Successful!";
        message.style.color = "green";
        window.location.href = ("../dashbord/dashbord.html");
    } else {
        message.textContent = "Login Failed!";
        message.style.color = "red";
    }
});

