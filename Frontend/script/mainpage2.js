import { footer, navbar } from "./components/footer.js"
// console.log(footer)  
let container = document.getElementById("footer")

let navContainer = document.getElementById("navbar");
fetch('https://nice-erin-coypu-toga.cyclic.app/users')
    .then(response => response.json())
    .then(data => {
        let userName = data.name; // assuming the user's name is stored in the 'name' field
        let signIdSpan = document.getElementById("signId");
        signIdSpan.textContent = userName;
    })
    .catch(error => console.error(error));

container.innerHTML = footer();
navContainer.innerHTML = navbar();