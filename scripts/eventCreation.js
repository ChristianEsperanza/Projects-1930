/**Function that will set the defaul date to todays date.
 * Grabs the month, day, year, and sets the date form minimum
 * attribute to the values that are grabbed.
 */
 var todayDate = new Date();
 var month = todayDate.getMonth() + 1;     // getMonth() starts at 0
 var day = todayDate.getDate();
 var year = todayDate.getFullYear();
 if(month < 10)
     month = '0' + month.toString();
 if(day < 10)
     day = '0' + day.toString();

 var minDate = year + '-' + month + '-' + day;
 var maxDate = (year + 1) + '-' + month + '-' + day;
 $('#inputDate').attr('min', minDate);
 $('#inputDate').attr('max', maxDate);



  

$("#button_submit").click(function(e) {
  e.preventDefault();
  console.log("in handler: clicked!");
});

//var values = $('#').val() -------------- for multi-selections
//JSON object before writing it on the data base and print it right away.

document
  .getElementById("eventCreation")
  .addEventListener("submit", processForm);

  
  
function processForm(e) {

  e.preventDefault();

  console.log("Yes button clicked");
  

  var event = db.collection("event");

  var user = firebase.auth().currentUser;

  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById("inputDate").value;
  var time = document.getElementById("inputTime").value;
  var ampm = document.getElementById("inputAMPM").value;
  var skillLevel = document.getElementById("select_skillLevel").value;
  var numOfBuddies = document.getElementById("select_numOfBuddies").value;
  var message = document.getElementById("text_event").value;

  const func = async () => {
    // `displayName${i}`
    // 'displayName' + i
    var timeID = "doc" + firebase.firestore.Timestamp.now().toMillis();
    console.log("Milli: ", timeID)
    event.doc(timeID).set({
      title: title,
      date: date,
      time: time + " " + ampm,
      skillLevel: skillLevel,
      maxNumber: numOfBuddies,
      message: message,
      host :user.displayName,
      docID: timeID, //timestamp seconds
      timeStamp: firebase.firestore.Timestamp.now(),
      joined: 0,
    }).then(function(){

      //window.location.assign("success_creating.html");
      window.location.assign("success_creating.html?" + timeID);

    });
  
  };

  function setUserCreatedEvent() {

    db.collection("user").where("email", "==", user.email).get().then(function (snap) {
      console.log(snap);
      snap.forEach(function (doc) {
        console.log(doc.data());
      });
    });
  }

  func();
  setUserCreatedEvent();

  
}

