let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("nameField");
let title = document.getElementById("title");

signinbtn.onclick = function() {
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    title.style.fontFamily = "Roboto";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");

}
signupbtn.onclick = function() {
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    title.style.fontFamily = "Roboto";

    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");

}