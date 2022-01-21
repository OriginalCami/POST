// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAbPdPpMECWcUy2BSS4Jl55r2-8jqU6g0",
  authDomain: "order-a966e.firebaseapp.com",
  projectId: "order-a966e",
  storageBucket: "order-a966e.appspot.com",
  messagingSenderId: "187010783944",
  appId: "1:187010783944:web:27646acad668e5dab0a3fd",
  measurementId: "G-679KMMPEK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   
    });});}
getData();