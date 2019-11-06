var attempt=3;//variable to count number of attempts
//below function executes on click of login button

function validate()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username=="PHPget" && password == "formphp#123")
{
alert("Login successfully");
window.location="success.html";//Redireting to other page
return false;
}
else
{
attempt--;//Decreament by one
alert("You have left "+attempt+"attempt");

if(attempt==0)
{
document.getElementById("username").disabled=true;
document.getElementById("passsword").disabled=true;
document.getElementById("submit").disabled=true;
return false;
}
}
}