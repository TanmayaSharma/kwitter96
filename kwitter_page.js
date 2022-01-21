var firebaseConfig = {
      apiKey: "AIzaSyAGFW_LfzfZdAUsgqeGoA8i9n0wOrGsJag",
      authDomain: "kwitter-5560d.firebaseapp.com",
      databaseURL: "https://kwitter-5560d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5560d",
      storageBucket: "kwitter-5560d.appspot.com",
      messagingSenderId: "250407316905",
      appId: "1:250407316905:web:987938f2ff6fe9dac428b8",
      measurementId: "G-06266CCQYS"
    };
    
    
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    var room_name = localStorage.getItem("room_name");

    function Send()
    {
          msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

          document.getElementById("msg").value ="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("romm_name");
      window.location="index.html";
}
