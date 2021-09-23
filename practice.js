
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDfnW2v3wu7VOU-JhYZCBSMX7IGRRYA9Pc",
  authDomain: "kwitter-aa2c4.firebaseapp.com",
  databaseURL: "https://kwitter-aa2c4-default-rtdb.firebaseio.com",
  projectId: "kwitter-aa2c4",
  storageBucket: "kwitter-aa2c4.appspot.com",
  messagingSenderId: "243585482455",
  appId: "1:243585482455:web:55be94466cd2ca9373fa92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


