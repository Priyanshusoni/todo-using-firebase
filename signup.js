  function sSignUp() {
  	var email = document.getElementById("email").value;
  	var password = document.getElementById("pass").value;
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
    console.log(errorMessage);
  // ...
});
      alert("sign up done");
      window.location = "log.html" ;
    }

    function lLogIn(){

    	var userEmail = document.getElementById("usernameBox").value;
    	var userPass = document.getElementById("userpassBox").value;

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
    console.log(errorMessage);
  // ...
});
    	alert("log in done");
    	window.location = "index.html"   }