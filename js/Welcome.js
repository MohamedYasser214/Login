var welcomeMessage = document.getElementById("welcomeMessage");
var logOutBtn =document.getElementById("logOutBtn")


if(localStorage.getItem("CurrentUserName")!=null){
    welcomeMessage.innerHTML=`Welcome , ${localStorage.getItem("CurrentUserName")}`
}

function logOutBtnn(){

    window.location.href="index.html"
    localStorage.removeItem("CurrentUserName")

}

logOutBtn.addEventListener("click" , function(){
    logOutBtnn()
})