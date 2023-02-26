let hotel_data=[
    {img:"https://be.synxis.com/shs-ngbe-image-resizer/images/hotel/4351/images/room/deluxe_room-king.jpg",
    name:"hotel name",
    price:2125,
    checkin:"24/05/2001",
    checkout:"24/05/2001",
    guest:"2 Adults"
    }
]
let container=document.getElementById("container")
let imgbox=document.getElementById("pj-hotel-div-img")
let desbox=document.getElementById("pj-hotel-div-1-des")
let desbox1=document.getElementById("pj-hotel-div-1-des1")
let desbox2=document.getElementById("pj-hotel-div-2")
let pjcheckin=document.getElementById("pj-checkin")
let pjcheckout=document.getElementById("pj-checkout")
let pjguest=document.getElementById("pj-guest")


// let bucketls=JSON.parse(localStorage.getItem("total"))||[];

let hotel_data_vw = JSON.parse(localStorage.getItem("hotel_data"));
console.log("hotel_data",hotel_data_vw)



let pjsetprice=()=>{
   
window.location.href="checkout page 2.html"
}


function append_hotel_data ({img,name,price}){
   
    let img1=document.createElement("img")
    img1.src=img;
    // console.log(img)
    imgbox.append(img1)

    let h2=document.createElement("h2")
    h2.id="pj-hotel-name"
    h2.innerText=name;

    

    let des=document.createElement("p")
    des.innerText="Sleep 3 | 1 King | 40Sqm. Guaranteed with Credit Card"

    let des1=document.createElement("p")
    des1.innerText="KING BED 40 SQM. FREE INTERNET, BATHTUB, 40 INCH FLAT TV, SAFE"

    desbox.append(name,des,des1)
    // div.append(img,name,price,des,des1)
    // container.append(div)
    let price2=document.createElement("p")
    price2.innerText=  price;

    let price1=document.createElement("p")
    price1.innerText="Per Night";

    let des2=document.createElement("p")
    des2.innerText="Night Excluding Taxes & Fees"

    let btn=document.createElement("button")
    btn.innerText="Book Now"
    btn.addEventListener("click",function(){
       pjsetprice()
    })

    desbox1.append(price,price1,des2,btn)

    let des3=document.createElement("p")
    des3.innerText="Desk or Workplace "


    let des4=document.createElement("p")
    des4.innerText="Air Conditioning"
    desbox2.append(des3,des4)

    let date1=document.createElement("p")
    date1.innerText= "On"+" "+checkin

    pjcheckin.append(date1)

    let date2=document.createElement("p")
    date2.innerText="On"+" "+checkout
    pjcheckout.append(date2)

    let guest=document.createElement("p")
    guest.innerText=guest
    pjguest.append(guest)
}


append_hotel_data(hotel_data_vw)
if ( nickname.length >= 1 ){

let namePaste = document.getElementById("navbar_signIn_yogi");

nickname.forEach(function(elem){
namePaste.innerText = elem.nickName;

})
}