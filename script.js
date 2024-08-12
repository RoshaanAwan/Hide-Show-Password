let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src="Eye-Open.png"
}
else{
    eyeIcon.src="eye-close.png"
    password.type = "password";
    
  }

};
