var InputName = document.getElementById("name");
var InputEmail = document.getElementById("email");
var InputPassword = document.getElementById("password");
var SignUpBtn = document.getElementById("SignUpBtn");
var alertMassage = document.getElementById("alertMassage");

var CartonaUsers = [];

if (localStorage.getItem("Users") != null) {
  CartonaUsers = JSON.parse(localStorage.getItem("Users"));
}

function SignUp() {
  if (!CheckForm()) {
    return; // البيانات مش كاملة، وقف الكود
  }

  var Users = {
    InputName: InputName.value,
    InputEmail: InputEmail.value,
    InputPassword: InputPassword.value,
  };
  CartonaUsers.push(Users);
  console.log(CartonaUsers);
  localStorage.setItem("Users", JSON.stringify(CartonaUsers));
  clrForm();
}

function CheckForm() {
  if (
    InputName.value == "" ||
    InputEmail.value == "" ||
    InputPassword.value == ""
  ) {
    alertMassage.innerHTML = "Please Fill All Input";
    alertMassage.classList.replace("d-none", "d-block");
    alertMassage.classList.add("text-danger");
    alertMassage.classList.remove("text-success");

    return false;
  }

  if (EmailIsExist(InputEmail.value)) {
    alertMassage.innerHTML = "Email Is Already Exist";
    alertMassage.classList.replace("d-none", "d-block");
    alertMassage.classList.add("text-danger");
  } else {
    alertMassage.innerHTML = "Sign Up Successful";
    alertMassage.classList.replace("d-none", "d-block");
    alertMassage.classList.add("text-success");
    alertMassage.classList.add("text-success");

    return true;
  }
}

function clrForm() {
  InputName.value = "";
  InputEmail.value = "";
  InputPassword.value = "";
}

function EmailIsExist(email) {
  for (var i = 0; i < CartonaUsers.length; i++) {
    if (CartonaUsers[i].InputEmail === email) {
      return true;
    }
  }
  return false;
}

SignUpBtn.addEventListener("click", function () {
  SignUp();
});
