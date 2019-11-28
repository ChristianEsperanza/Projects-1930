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

function getEventByTimestamp(){
  var queryString = decodeURIComponent(window.location.search);
  var queries = queryString.split("?");
  var timeID = queries[1];


 // var FStimeID = firebase.firestore.Timestamp.fromDate(timeID); // ?? check 

  //console.log("inside getEventByTimestamp " + FStimeID);

  db.collection("event").where("docID", "==", timeID).get().then(function(snap){

      console.log(snap);
      snap.forEach(function(doc){
          console.log(doc.data());
      })
  })

}
getEventByTimestamp();


firebase.auth().onAuthStateChanged(function(user) {
  db.collection("user")
    .doc(user.uid)
    .onSnapshot(function(snap) {
      console.log(snap.data());

      //Customizes user index page to display the user's name which
      //Is stored in the database
      document.getElementById("username").innerHTML = snap.data().name;

      //get details of 

    });
});
