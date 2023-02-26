// Function to get user details from server
function getUserDetails() {
    const token = localStorage.getItem('token');
    if (token) {
      const { userID } = jwt_decode(token);
      fetch(`https://nice-erin-coypu-toga.cyclic.app/users/${userID}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(user => {
        // Update account details with user's name and email
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        name.textContent = user.name;
        email.textContent = user.email;
      })
      .catch(err => console.error(err));
    }
  }
  
  import jwt from 'jsonwebtoken';

  // Function to handle changing password
  function changePassword(event) {
    event.preventDefault();
    const email = localStorage.getItem('email');
    const oldPassword = prompt('Enter your old password:');
    const newPassword = prompt('Enter your new password:');
    fetch('https://nice-erin-coypu-toga.cyclic.app/users/update-pass', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, oldPassword, newPassword })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.msg);
    })
    .catch(err => console.error(err));
  }
  
  // Call getUserDetails function on page load
  getUserDetails();
  
  // Add event listener to change password button
  const changePassBtn = document.getElementById('change-pass');
  changePassBtn.addEventListener('click', changePassword);
  