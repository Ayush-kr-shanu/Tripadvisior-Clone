let hotel_data = [
    {
        img: "https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/4351/images/room/deluxe_room-king.jpg",
        name: "hotel name",
        price: 2125,
        checkin: "24/05/2001",
        checkout: "25/05/2001",
        guest: "2 Adults"
    }
]
let bucketls = JSON.parse(localStorage.getItem("total")) || []
let userls = JSON.parse(localStorage.getItem("user")) || []

let date = JSON.parse(localStorage.getItem("date"));
console.log("date: ",date)

let guestDetail = JSON.parse(localStorage.getItem("guest_details"));
console.log("guestDetail",guestDetail)

let hotel_data_vw = JSON.parse(localStorage.getItem("hotel_data"));
console.log("hotel_data",hotel_data_vw)

let appendPrice = hotel_data_vw.price
console.log("appendDate1:",appendPrice)

let pjcheckin = document.getElementById("pj-checkin")
pjcheckin.innerText = `Check-in: ${date.checkIn}`;

let pjcheckout = document.getElementById("pj-checkout")
pjcheckout.innerText = `Check-out: ${date.checkOut}`;

let pjguest = document.getElementById("pj-guest")
pjguest.innerText = `Adult: ${guestDetail.adult}  Children:${guestDetail.children} ` ;

let total = document.getElementById("pj-total-span")
total.innerText = hotel_data_vw.price;

// let arr = []
let pjsetuser = () => {
    let firstname = document.getElementById("pj-first-name").value;
    console.log(firstname)
    let lastname = document.getElementById("pj-last-name").value;
    console.log(lastname)
    let obj = {
        firstname,
        lastname
    }
    // arr.push(obj)
    localStorage.setItem("user", JSON.stringify(obj))


    window.location.href = "thank.html"
}
