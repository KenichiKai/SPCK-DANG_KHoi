import {
    getAuth,
    signInWithEmailAndPassword,
    }    from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

    const auth = getAuth();

    const signInEmail = document.getElementById("signin-email");
    const signInPass = document.getElementById("signin-password");
    const signInBtn = document.getElementById("signin-btn");

    console.log(auth);