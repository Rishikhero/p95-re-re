//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            message:msg,
            name:user_name,
      })
       }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
namei = message_data['name'];
like = message_data['like'] ;
message = message_data['message'];
name_with_tage = "<h4> "+ namei +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
like_span = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tage + message_with_tag + like_button + like_span;

document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
       likes = document.getElementById(button_id).value;
       updated_likes = Number(likes) + 1;
       console.log(updated_likes);


      firebase.database().ref(room_name).child(message_id).update
      ({
             like : updated_likes
             });
}






function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    
