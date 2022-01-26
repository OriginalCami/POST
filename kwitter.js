
function addUser1() {
  user_name = document.getElementById("user_name").value;
  
  localStorage.setItem("user_name", user_name);

    window.location = "sign_up.html";
}

function addUser() {
  user_name = document.getElementById("user_name").value;
  
  localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

