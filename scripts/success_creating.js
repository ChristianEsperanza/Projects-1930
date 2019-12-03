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

var queryString = decodeURIComponent(window.location.search);
var queries = queryString.split("?");
var timeID = queries[1];
var justCreatedEvent = db.collection("event").where("docID", "==", timeID);

  //store created event in the user collection field.
  //DOESN'T WORK (yet) :(
  function setUserCreatedEvent() {

    var userCol = db.collection("user");
    var user = firebase.auth().currentUser;
    var uid = user.uid;

    // db.collection("user").where("email", "==", user.email).get().then(function (snap) {
      userCol.doc("kz1VUtFM2CZwe4ycMdmp3PJoT3j1").set({
        created: db.collection("event").doc('event/' + timeID)
      })

    console.log("HIIII", data);


  };



function getEventByTimestamp() {

  // var FStimeID = firebase.firestore.Timestamp.fromDate(timeID); // ?? check 

  //console.log("inside getEventByTimestamp " + FStimeID);

  db.collection("event").where("docID", "==", timeID).get().then(function (snap) {

    console.log(snap);
    snap.forEach(function (doc) {
      console.log(doc.data());
    })
  })

}

function displayLatestEventInfo() {

  justCreatedEvent.get().then(function (snap) {
    snap.forEach(function (doc) {
      var title = doc.data().title;

      var dateAndTime = doc.data().date + " at " + doc.data().time;

      var skillLevel = doc.data().skillLevel;

      var numOfPeople = doc.data().joined + "/" + doc.data().maxNumber;

      console.log("title:", title);
      console.log("date:", dateAndTime);
      console.log("skill level", skillLevel);
      console.log("how many people?", numOfPeople);

      $('#eventTitle').append('<div>' + title + '</div>');
      $('#dateAndTime').append('<div>' + dateAndTime + '</div>');
      $('#skillLevel').append('<div>' + skillLevel + '</div>');
      $('#numOfPeople').append(numOfPeople);
    });
  });
}


getEventByTimestamp();
displayLatestEventInfo();


firebase.auth().onAuthStateChanged(function (user) {
  db.collection("user")
    .doc(user.uid)
    .onSnapshot(function (snap) {
      console.log(snap.data());

      //Customizes user index page to display the user's name which
      //Is stored in the database
      document.getElementById("username").innerHTML = snap.data().name;

      //get details of 

    });
});