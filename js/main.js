
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    const analytics = getAnalytics(app);
    console.log(app)