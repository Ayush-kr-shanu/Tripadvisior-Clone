const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email input value
  const email = document.getElementById('email').value;

  // Make a request to delete the user
  fetch('https://nice-erin-coypu-toga.cyclic.app/users/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the JWT token in the headers
    },
    body: JSON.stringify({ email })
  })
    .then(res => res.text())
    .then(data => {
      alert(data); // Show a message with the response
      form.reset(); // Clear the form input
    })
    .catch(err => console.error(err));
});
