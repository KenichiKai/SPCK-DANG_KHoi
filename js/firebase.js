
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFYdlNOqhlMQ3s_x_WzKceoGNzcGqhrzQ",
    authDomain: "spckdang-khoi.firebaseapp.com",
    projectId: "spckdang-khoi",
    storageBucket: "spckdang-khoi.appspot.com",
    messagingSenderId: "997187673086",
    appId: "1:997187673086:web:2e02fb1db65028b263beaf",
    measurementId: "G-H13MSKVD21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);