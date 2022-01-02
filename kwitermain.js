const firebaseConfig = {
  apiKey: "AIzaSyAAddz5cwK1zbhICTLWcKfTbSSNle723uo",
  authDomain: "kwitter--o.firebaseapp.com",
  databaseURL: "https://kwitter--o-default-rtdb.firebaseio.com",
  projectId: "kwitter--o",
  storageBucket: "kwitter--o.appspot.com",
  messagingSenderId: "254296247089",
  appId: "1:254296247089:web:7268d52553aae58735be10"
};
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   
    console.log("Room Name -" + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoRoomName(this.id) ' >#"+ Room_names+ "</div><hr>";
    document.getElementById("output").innerHTML += row;
   
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"   
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}

function redirecttoRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html";
}
