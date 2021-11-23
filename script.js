function myMessage() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    alert(userName + " thank you for your details. We will be in touch via " + userEmail + " shortly");
}

function hide() {
    document.getElementById("myForm").style.display = "none";
}
//I was not able to get the form to hide after submission