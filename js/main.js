//Active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show"); 
    })
})


function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/918054354914?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "address: " + address  + "%0a"
    + "Service: " + service; 

    window.open(url, '_blank').focus();
}
