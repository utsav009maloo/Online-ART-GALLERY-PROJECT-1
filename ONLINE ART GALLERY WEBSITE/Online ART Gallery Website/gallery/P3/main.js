// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkwGA1xlvnStosTdRO3At2DJSQS2mHSXQ",
    authDomain: "artstreet-1f366.firebaseapp.com",
    databaseURL: "https://artstreet-1f366-default-rtdb.firebaseio.com",
    projectId: "artstreet-1f366",
    storageBucket: "artstreet-1f366.appspot.com",
    messagingSenderId: "462433204198",
    appId: "1:462433204198:web:d19e9573f842a375c3c827"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('feedback');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
var name = getInputVal('firstname');
var company = getInputVal('lastname');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

saveMessage(firstname, lastname, email, phone, message);

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

}

// Function to get get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(firstname, lastname, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({

firstname: firstname,
lastname:lastname, 
email:email,
phone:phone,
message:message
});
}