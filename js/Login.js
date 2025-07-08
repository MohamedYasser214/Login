var EmailLoginInput=document.getElementById("EmailLoginInput")
var PasswordLoginInput=document.getElementById("PasswordLoginInput")
var loginBtn=document.getElementById("loginBtn")
var alertMassage=document.getElementById("alertMassage")
var CartonaUser=[]

if(localStorage.getItem("Users")!=null){
    CartonaUser=JSON.parse(localStorage.getItem("Users"))
}
function login(){

    if(!CheckForm()){
        return;
    }

    var email=EmailLoginInput.value;
    var password =PasswordLoginInput.value
    console.log(CartonaUser)

    var UserExist=false 
    var currentUser = null;

    for(var i = 0 ; i<CartonaUser.length ; i++){
        if(CartonaUser[i].InputEmail===email && CartonaUser[i].InputPassword===password){
            UserExist = true;
            currentUser = CartonaUser[i]; // ← احفظ اليوزر هنا
            break;
        }

    }
if(UserExist==true){

    localStorage.setItem("CurrentUserName", CartonaUser[i].InputName); // ← خد بالك من i
    alertMassage.innerHTML="Login Successful"
    alertMassage.classList.replace("d-none","d-block")
    alertMassage.classList.add("text-success")

    window.location.href = "../Welcome.html";  
    // بعد ما تأكدت إن اليوزر موجود


}
else{
    alertMassage.innerHTML="Email Is Valid"
    alertMassage.classList.replace("d-none","d-block")
    alertMassage.classList.add("text-danger")

}

}

function CheckForm(){
    if(PasswordLoginInput.value=="" || EmailLoginInput.value==""){
        alertMassage.innerHTML="Please fill all Input"
        alertMassage.classList.replace("d-none","d-block")
        alertMassage.classList.add("text-danger")
        return false;
    }else{

        alertMassage.innerHTML="Login Successful"
        alertMassage.classList.replace("d-none","d-block")
        alertMassage.classList.add("text-success")

        return true
    }
}
















loginBtn.addEventListener("click" , function(){
    login()
})