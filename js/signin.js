import {
    getAuth,
    signInWithEmailAndPassword,
    }    from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    import Toasty from "./toast.js";

    const auth = getAuth();

    const signInEmail = document.getElementById("email");
    const signInPass = document.getElementById("password");
    const signInBtn = document.getElementById("btnSubmit");
    const toastHTMLElement = document.getElementById("toast");
    const toastContent = document.getElementById("toast-content");

    signInBtn.addEventListener("click", (e) => {
        e.preventDefault();
        var emailValueSI = signInEmail.value;
        var passwordValueSI = signInPass.value;
        let vietThuong = /[a-z]/g;
        let vietHoa = /[A-Z]/g;
        let chuSo = /[0-9]/g;
        const signInToast = new Toasty(toastHTMLElement, toastContent);
        
        if(emailValueSI.trim().length == 0 || passwordValueSI.trim().lenth == 0)
        {
            signInToast.showAlert("Khong duoc de trong!", 'red');
        }
        else{
            signInWithEmailAndPassword(auth, emailValueSI, passwordValueSI)
            .then((useCredential) => {
                const user = useCredential.user;
                console.log(user);
                async function signIn() {
                     signInToast.showAlert("Dang nhap thanh cong!", 'green');
                     await new Promise(resolve => setTimeout(resolve, 1000))
                     window.location.href = "index.html";
                }
                signIn()
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.Message;
                signInToast.showAlert(errorMessage, 'red');
            })
        }


    })
    // console.log(auth);
