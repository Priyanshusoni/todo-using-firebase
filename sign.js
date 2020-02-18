 var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
 return input.value.length;
}

function listLength() {
 return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //create list element
    li.appendChild(document.createTextNode(input.value)); //take input value in list
    ul.appendChild(li); //add list in ul tag
    input.value = ""; //then make input box empty

   function crossout() {
	   li.classList.toggle("ok"); //add class on list element which name is "ok" 
   }
   li.addEventListener("click",crossout); //call crossout function on every click on list
 
    // add delete button
   var del = document.createElement("button");
   del.appendChild(document.createTextNode("X"));
   li.appendChild(del);
   del.addEventListener("click",deleteList);
   del.classList.add("delbutt");
    // button created and then create delete function display:none

   function deleteList() {
 	   li.classList.add("delete");
    }
    //delete class added to list 
} 

function addListAfterClick() {
	if(inputLength() > 0) // make sure dont create empty list
	{
        createListElement();
	}
}

function addListAfterKeyPress(event) {
	if(inputLength() > 0 && event.which === 13) //make sure dont create empty list
	{
        createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeyPress);



//get email and signup code

  function sSignUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var Cpassword = document.getElementById("cpass");
 
    if (password === Cpassword.value) {

     firebase.auth().createUserWithEmailAndPassword(email, password).then(function()
      { window.location = "log.html";}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
    console.log(errorMessage);
  // ...
    })
  alert("Account Created");
   }
      else {
              Cpassword.style.borderColor = "#ff8080";
              alert("Password does'nt match");
  }
}// sign up code end and done

//login code
   function lLogIn(){
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }

      else{
      var userEmail = document.getElementById("usernameBox").value;
      var userPass = document.getElementById("userpassBox").value;

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
          console.log("redirect");
          document.getElementById("show_login").style.display =  "none";
          document.getElementById("show_logout").style.display = "inline";

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
    console.log(errorMessage);
    if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else if (errorCode === 'auth/user-not-found'){
            alert(errorMessage);
          }
  // ...
});

  }
 
  }//login code done


  function lLogout() {
     firebase.auth().signOut().then(function () { window.location = "index.html"; });
   }

function bygoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  // log in with popwindow

   firebase.auth().signInWithPopup(provider).then(function () {

   window.location = "www.google.com";
   }).catch(function (error){
     var errorMessage = error.message;
     alert(errorMessage);
     var errorCode = error.code;
     console.log(errorCode);
   });

alert("its working")
  //firebase.auth().onAuthStateChanged(newLogIn); 
}

function byPhone() {
window.location = "byPhone.html";
 }




 
 function databaseCode()
   {
    var rootRef = firebase.database().ref().child("Users");
    var userId = firebase.auth().currentUser.uid;
    var userRef = rootRef.child(userId);

    var userData = { Email:"userEmail" }
    userRef.set(userData, function(error){

      if(error) { var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
    console.log(errorMessage);
   }
    else { alert("its working"); }
    });
   }

 