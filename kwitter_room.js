// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAbPdPpMECWcUy2BSS4Jl55r2-8jqU6g0",
  authDomain: "order-a966e.firebaseapp.com",
  databaseURL: "https://order-a966e-default-rtdb.firebaseio.com",
  projectId: "order-a966e",
  storageBucket: "order-a966e.appspot.com",
  messagingSenderId: "187010783944",
  appId: "1:187010783944:web:27646acad668e5dab0a3fd",
  measurementId: "G-679KMMPEK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
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

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}