let form = document.querySelector("form");
form.addEventListener("submit", myForm);

// let arr = [];

function myForm(event){
  event.preventDefault();

  let payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("password").value,
  }
  fetch('https://nice-erin-coypu-toga.cyclic.app/users/register',{
    method:'POST',
          headers:{
              'Content-type':'application/json'
          },
          body:JSON.stringify(payload)
      })
      .then(res=>res.json())
      .then(res=>{
          console.log(res)
          localStorage.setItem('token',res.token)
          alert("Registration Successful ")
          window.location.href = "/login.html"
      })
      .catch(err=>console.log(err))
}
