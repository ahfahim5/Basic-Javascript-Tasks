document.getElementById('submitBtn').addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const password = document.getElementById('password').value;
  const existingData = localStorage.getItem('userData');
  let userData = existingData ? JSON.parse(existingData) : [];
  const newData = {
    name: name,
    email: email,
    number: number,
    password: password
  };

  const existingUser = userData.find(user => user.email === email);
  if (existingUser) {
    alert('Email already exists');
    return;
  }

  userData.push(newData);
  localStorage.setItem('userData', JSON.stringify(userData)); 
  
  setInterval(() => {
    window.location.href = '../login/login.html';
  }, 2000);
});
