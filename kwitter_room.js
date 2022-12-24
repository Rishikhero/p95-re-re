
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyD_wOrVzz-piigc7prAFOz_J1c4006Bpu4",
  authDomain: "p95-re.firebaseapp.com",
  databaseURL: "https://p95-re-default-rtdb.firebaseio.com",
  projectId: "p95-re",
  storageBucket: "p95-re.appspot.com",
  messagingSenderId: "76649331857",
  appId: "1:76649331857:web:1c417897a526d927b99330",
  measurementId: "G-86WMRGMFHZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {
                purpose : "adding room name"
            }
        );
        localStorage.setItem("room_name", room_name);
        window.location = "Kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name); 
  window.location = "Kwitter_page.html";    
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
