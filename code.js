 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
 import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
 
 
 
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA6l9P7JhLBqx9UJURYX0QyTD8mj1gPybM",
   authDomain: "rello-49227.firebaseapp.com",
   projectId: "rello-49227",
   storageBucket: "rello-49227.appspot.com",
   messagingSenderId: "48399287243",
   appId: "1:48399287243:web:5cd2304d47878e4a44ac4e",
   measurementId: "G-7555N42414"
 };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 
 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
 
        //submit button
        const submit = document.getElementById('submit');
        submit.addEventListener("click", function(event) {
            event.preventDefault()
              //inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "/index.html";
        // ...
        
        })
    });

    const email1 = document.getElementById('email1').value;
    const password1 = document.getElementById('password1').value;

    //submit button
    const submit1 = document.getElementById('submit1');
    submit1.addEventListener("click", function (event) {
      event.preventDefault()
      //inputs
      const email1 = document.getElementById('email1').value;
      const password1 = document.getElementById('password1').value;

      createUserWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {

          sendEmailVerification(auth.currentUser)
            .then(() => {
              alert("Email verification link sent!");
            });

          // Signed in 
          const user = userCredential.user;
          alert("Created Account Succesfully!...")
          window.location.href = "/index.html";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("errorMessage")
          // ..
        });
    });  





      