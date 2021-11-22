var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
   apiKey: "AIzaSyAkwGA1xlvnStosTdRO3At2DJSQS2mHSXQ",
    authDomain: "artstreet-1f366.firebaseapp.com",
    projectId: "artstreet-1f366",
    storageBucket: "artstreet-1f366.appspot.com",
    messagingSenderId: "462433204198",
    appId: "1:462433204198:web:ad40f25ec132bf89c3c827"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


