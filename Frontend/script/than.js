    
    let user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("pj-user-fullname").innerText = `${user.firstname} ${user.lastname}`
    
    let date = JSON.parse(localStorage.getItem("date"));
    console.log("date: ",date)
    
    let guestDetail = JSON.parse(localStorage.getItem("guest_details"));
    console.log("guestDetail",guestDetail)

    let pjcheckin=document.getElementById("pj-checkin")
    pjcheckin.innerText = `On ${date.checkIn}`;

    let pjcheckout=document.getElementById("pj-checkout")
    pjcheckout.innerText = `On ${date.checkOut}`

    let pjguest=document.getElementById("pj-guest")
    pjguest.innerText = `For ${guestDetail.adult} Adult & ${guestDetail.children} Child`;

    let btn=document.getElementById('home')
    btn.addEventListener('click',function(){
        window.location.href='./index.html'
    })
     
    