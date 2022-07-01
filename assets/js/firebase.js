/*----------------------------
	START - Firebase Sign up
	------------------------------ */
	// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
	import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzTR9oz8WOj_B4lAEAScsowfjaXs_2IsI",
    authDomain: "megaone-c6490.firebaseapp.com",
    projectId: "megaone-c6490",
    storageBucket: "megaone-c6490.appspot.com",
    messagingSenderId: "346666459656",
    appId: "1:346666459656:web:c7b5697d2e0138061ae7bd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

	//collect inout values

	
	//sign up
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

	//sign in
	signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
