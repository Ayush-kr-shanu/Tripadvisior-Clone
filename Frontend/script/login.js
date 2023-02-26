

let form = document.querySelector("form");
form.addEventListener("submit", myForm);

function myForm(event) {
event.preventDefault();

const email = document.getElementById('email').value;
const pass = document.getElementById('pass').value;

fetch('https://nice-erin-coypu-toga.cyclic.app/users/login', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({ email, pass })
})
.then(res => {
if (!res.ok) {
  throw new Error('Invalid email or password'); // Handle server errors
}
return res.json();
})
.then(res => {
if (res.msg === "user has been logged in") {
  console.log(res);
  localStorage.setItem('token', res.token);
  alert('Login Successful');
  window.location.href = './index.html'; // Redirect after login
} else {
  alert('Wrong credentials');
}
})
.catch(err => {
console.error(err);
alert('Invalid email or password'); // Display error message to user
});
}


