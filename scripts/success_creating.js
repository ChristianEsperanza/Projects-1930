// var result=1000;
// var target;

// db.collection("event").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         if(result>doc.data().timeStamp){
//             result
//         } else{
//             result =doc.data().timeStamp;
//         }
//         console.log(result);
//         console.log(doc.data());
        
//     })
// });


firebase.auth().onAuthStateChanged(function(user) {
  db.collection("user")
    .doc(user.uid)
    .onSnapshot(function(snap) {
      console.log(snap.data());

      //Customizes user index page to display the user's name which
      //Is stored in the database
      document.getElementById("username").innerHTML = snap.data().name;
    });
});
