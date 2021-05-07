var database = firebase.database();

var existingEmail = $("#email-text");
var existingPassword = $("#password-text");
var loginBtn = $("#submit-up");
var loginError = $("#login-errors")

var signupName = $("#user-name");
var signupEmail = $("#signup-email");
var signupPass = $("#signup-password");
var signupBtn = $("#signup-submit");

var tempUser = {
    "name": "",
    "email": "",
    "password": ""
  };

// Existing user login function
$(loginBtn).on("click", function(){
  event.preventDefault();

    database.on("value", function(snapshot) {

    if (snapshot.child('email') = existingEmail){
      
    }

  });  

});

// New user signup function
$(signupBtn).on("click", function(){
  event.preventDefault();

  var signupUsersName = signupName.val().trim();
  var signupUserEmail = signupEmail.val().trim();
  var signupUserPassword = signupPass.val().trim();

  console.log(signupUsersName);
  console.log(signupUserEmail);
  console.log(signupUserPassword); 

  var newUserObject = {
    "name": signupUsersName,
    "email": signupUserEmail,
    "password": signupUserPassword
  }; 

  dbUsers = firebase.database().ref('/userdata');
  dbCurrentUser = firebase.database().ref('/userdata/' +signupUsersName);

  dbUsers.once("value", snap=>{

    tempUser = snap.val();

    if (snap.hasChild(signupUsersName)){
    // dbCurrentUser.set(newUserObject);
    $("#user-exists-prompt").append("User already exists");
  } else{
    dbCurrentUser.set(newUserObject);
  }
  });



});

function createdUser() {
  var pullUserDetails = firebase.ref().child("name");

  console.log(pullUserDetails);

};


// Is logged in true(boolean)
// Propagate logged in user details to the navbar
// Setup a user settings menu with log out working for now
// username stored in firebase should "username"toLowercase();







