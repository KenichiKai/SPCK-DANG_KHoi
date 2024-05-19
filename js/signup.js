import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import Toasty from "./toast.js";

const signUpEmail = document.getElementById("email");
const signUpUsername = document.getElementById("username");
const signUpPass = document.getElementById("password");
const signUpConfirmPassword = document.getElementById("confirmPassword");
const signUpBtn = document.getElementById("btnSubmit");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");

const auth = getAuth();

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var emailValueSU = signUpEmail.value;
  var passwordValueSU = signUpPass.value;
  let vietThuong = /[a-z]/g;
  let vietHoa = /[A-Z]/g;
  let chuSo = /[0-9]/g;
  const signUpToast = new Toasty(toastHTMLElement, toastContent);

  if (
    signUpUsername.value.trim().length == 0 ||
    signUpEmail.value.trim().length == 0 ||
    signUpPass.value.trim().length == 0 ||
    signUpConfirmPassword.value.trim().length == 0
  ) {
    signUpToast.showAlert("Something still empty :(", 'red');
  } else if (signUpPass.value.trim().length < 8) {
    signUpToast.showAlert("Password must be at least 8 characters :(", 'red');
  } else if (!signUpPass.value.trim().match(vietThuong)) {
    signUpToast.showAlert("Password must have at least 1 lowercase character :(", 'red');
  } else if (!signUpPass.value.trim().match(vietHoa)) {
    signUpToast.showAlert("Password must have at least 1 uppercase character :(", 'red');
  } else if (!signUpPass.value.trim().match(chuSo)) {
    signUpToast.showAlert("Password must have at least 1 alphanumeric character :(", 'red');
  } else if (signUpPass.value.trim() != signUpConfirmPassword.value.trim()) {
    signUpToast.showAlert("Password isn't match :(", 'red');
  } else {
    createUserWithEmailAndPassword(auth, emailValueSU, passwordValueSU)
      // createUserWithEmailAndPassword(auth, emailValueSU, passwordValueSU)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        signUpToast.showAlert("Sign up successfully !", 'green');
        window.location.href = "signin.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
});


