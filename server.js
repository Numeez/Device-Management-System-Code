const {userSignIn} = require("./FirebaseSignIn")
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
const auth = getAuth(firebaseApp.initializeApp(firebaseConfig));


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.get("/",(req,res)=>{
    res.send("Hello this node backend server index page")
})

app.post("/signIn",(req,res)=>{
    signInWithEmailAndPassword(auth, req.query.email, req.query.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    res.json(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.json(errorCode)
  });
  
 })
 
const PORT = 7171

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`)
})

