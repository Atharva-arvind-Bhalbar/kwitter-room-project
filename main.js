function addUser()
{
    User_name = document.getElementById("user_name").Value ;
    localStorage.setItem("user_name", User_name );
    window.location = "kwitter_room.html";
}