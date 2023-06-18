const firebaseApp = require("firebase/app")
const {getAuth,signInWithEmailAndPassword} = require("firebase/auth")


const firebaseConfig= {
    apiKey: "AIzaSyBXLwZkfTJ6CLOlIEz6q5j1BxDeBPWRpyI",
    authDomain: "device-management-system-20dbf.firebaseapp.com",
    projectId: "device-management-system-20dbf",
    storageBucket: "device-management-system-20dbf.appspot.com",
    messagingSenderId: "654969632737",
    appId: "1:654969632737:web:ce6ee58b30135b03f8c4a0",
    measurementId: "G-S9XQW43MYN"

}


function userSignIn (email,password){

const auth = getAuth(firebaseApp.initializeApp(firebaseConfig));

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



module.exports={
    userSignIn
}



