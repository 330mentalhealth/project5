
function validate(){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
if ( username == "John" && password == "password"){
window.location = "indexJohn.html"; // Redirecting to other page.
return false;
}
if ( username == "Sally" && password == "password"){
window.location = "indexSally.html"; // Redirecting to other page.
return false;
}
else{
	alert("Username or password incorrect");
	window.location = "page2.html"
}
}