window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'normal',
  callback: function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    loginwithphone();
  },
  'expired-callback': function() {
    // Response expired. Ask user to solve reCAPTCHA again.
    // ...
  }
});

function loginwithphone(){ 

var phoneNumber = document.getElementById("phoneNo").value;
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      console.log(error);
    });
}


function codeconfirm(){
 var code = document.getElementById("code").value;
confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
  var user = result.user;
  console.log(user);
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  console.log(error);
});

 }